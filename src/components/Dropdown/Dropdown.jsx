import VueTypes from 'vue-types';
import _ from 'lodash';
import popperMixin from 'mixins/popper';
import prefix, { defaultClassPrefix } from 'utils/prefix';
import { splitDataByComponent } from 'utils/split';
import shallowEqual from 'utils/shallowEqual';

import DropdownToggle from './DropdownToggle.jsx';
import DropdownMenu from './DropdownMenu.jsx';

const CLASS_PREFIX = 'dropdown';

export default {
  name: 'Dropdown',

  mixins: [popperMixin],

  inject: {
    $vSidenav: { from: '$vSidenav', default: false },
  },

  props: {
    /* eslint-disable vue/require-prop-types */
    placement: {
      ...popperMixin.props.placement,
      default: 'bottom-start',
    },
    trigger: {
      ...popperMixin.props.trigger,
      default: 'click',
    },
    eventKey: VueTypes.any,
    activeKey: VueTypes.any,
    title: VueTypes.string, // slot
    icon: VueTypes.string, // slot
    disabled: VueTypes.bool.def(false),
    noCaret: VueTypes.bool.def(false),
    tabindex: VueTypes.number,
    menuStyle: VueTypes.object,
    toggleClassName: VueTypes.string,
    classPrefix: VueTypes.string.def(defaultClassPrefix(CLASS_PREFIX)),
    toggleComponentClass: VueTypes.oneOfType([
      VueTypes.string,
      VueTypes.object,
    ]).def(() => undefined),
    componentClass: VueTypes.oneOfType([VueTypes.string, VueTypes.object]).def(
      'div'
    ),
    // close, open, toggle, select
  },

  computed: {
    openKeys() {
      return (this.$vSidenav && this.$vSidenav.currentOpenKeys) || [];
    },

    expanded() {
      return this.openKeys.some(key => shallowEqual(key, this.eventKey));
    },

    collapsible() {
      return this.$vSidenav && this.$vSidenav.expanded;
    },

    sidenav() {
      return !!this.$vSidenav;
    },

    classes() {
      return [
        this.classPrefix,
        this._addPrefix(`placement-${this.placement}`),
        {
          [this._addPrefix('disabled')]: this.disabled,
          [this._addPrefix('no-caret')]: this.noCaret,
          [this._addPrefix('open')]: this.currentVisible,
          [this._addPrefix(this.expanded ? 'expand' : 'collapse')]: this
            .sidenav,
        },
      ];
    },
  },

  render(h) {
    const Component = this.componentClass;
    let dropdownData = splitDataByComponent(
      {
        class: this.classes,
        splitProps: { role: 'menu' },
        ref: 'container',
      },
      Component
    );
    let popperData = {
      class: [this._addPickerPrefix('menu')],
      ref: 'popper',
    };

    if (!this.sidenav) {
      const referenceData = {
        class: this._addPrefix('rel'),
        ref: 'reference',
      };

      dropdownData = _.merge(dropdownData, {
        directives: [
          { name: 'click-outside', value: this._handleClickOutside },
        ],
      });

      popperData = _.merge(popperData, {
        directives: [
          {
            name: 'show',
            value: this.currentVisible,
          },
          { name: 'transfer-dom' },
        ],
        attrs: {
          'data-transfer': `${this.transfer}`,
        },
      });

      if (!this.disabled) {
        this._addTriggerListeners(referenceData, dropdownData);
      }

      return (
        <Component {...dropdownData}>
          <transition name="picker-fade">
            {this._renderMenu(h, popperData)}
          </transition>
          <div {...referenceData}>{this._renderToggle(h)}</div>
        </Component>
      );
    }

    return (
      <Component {...dropdownData}>
        {this._renderMenu(h, popperData)}
        {this._renderToggle(h)}
      </Component>
    );
  },

  methods: {
    _renderToggle() {
      const data = splitDataByComponent(
        {
          class: this.toggleClassName,
          splitProps: {
            ...this.$attrs,
            icon: this.icon,
            noCaret: this.noCaret,
            disabled: this.disabled,
            tabindex: this.tabindex,
            componentClass: this.toggleComponentClass,
          },
          on: { click: event => this._handleToggle(this.eventKey, event) },
        },
        DropdownToggle
      );

      return (
        <DropdownToggle {...data}>
          {this.title}
          {this.$slots.title && (
            <template slot="title">{this.$slots.title}</template>
          )}
          {this.$slots.icon && (
            <template slot="icon">{this.$slots.icon}</template>
          )}
        </DropdownToggle>
      );
    },

    _renderMenu(h, popperData) {
      const data = _.merge(popperData, {
        style: this.menuStyle,
        props: {
          activeKey: this.activeKey,
          sidenav: this.sidenav,
          expanded: this.expanded,
          collapsible: this.collapsible,
          openKeys: this.openKeys,
        },
        on: {
          toggle: this._handleToggle,
          select: this._handleSelect,
        },
      });

      return <DropdownMenu {...data}>{this.$slots.default}</DropdownMenu>;
    },

    _handleToggle(eventKey, event) {
      if (!this.sidenav) return;

      this.$emit('toggle', eventKey, event);
      this.$vSidenav && this.$vSidenav._handleOpenChange(eventKey, event);
    },

    _handleSelect(eventKey, event) {
      this._closePopper();

      this.$emit('select', eventKey, event);
      this.$vSidenav && this.$vSidenav._handleSelect(eventKey, event);
    },

    _addPrefix(cls) {
      return prefix(this.classPrefix, cls);
    },

    _addPickerPrefix(cls) {
      return prefix(defaultClassPrefix('picker'), cls);
    },
  },
};