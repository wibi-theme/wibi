import { storiesOf } from '@storybook/vue';
import {
  BooleanType,
  NumberType,
  StringType,
  ArrayType,
  ObjectType,
  DateType,
} from 'shares/schema';
import users from 'stories/data/user';
import city from 'stories/data/city';

import JsonPretty from 'vue-json-pretty';
import Form from 'components/Form';
import Radio from 'components/Radio';
import RadioGroup from 'components/RadioGroup';
import Checkbox from 'components/Checkbox';
import CheckboxGroup from 'components/CheckboxGroup';
import Toggle from 'components/Toggle';
import Input from 'components/Input';
import InputNumber from 'components/InputNumber';
import AutoComplete from 'components/AutoComplete';
import InputPicker from 'components/InputPicker';
import TagPicker from 'components/TagPicker';
import SelectPicker from 'components/SelectPicker';
import CheckPicker from 'components/CheckPicker';
import Cascader from 'components/Cascader';
import DatePicker from 'components/DatePicker';
import DateRangePicker from 'components/DateRangePicker';
import Slider from 'components/Slider';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Demo from 'stories/demo';
import Icon from 'components/Icon';

const stories = storiesOf('Data Entry|Form', module);

stories.add('default', () => ({
  render() {
    return (
      <Demo title="Default">
        <Form>
          <Form.Item label="Username" name="name" help="Required" helpTooltip>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" help="Required">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Textarea" name="textarea">
            <Input rows={5} componentClass="textarea" />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button appearance="primary">Submit</Button>
              <Button appearance="default">Reset</Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>
      </Demo>
    );
  },
}));

stories.add('fluid', () => ({
  render() {
    return (
      <Demo title="Fluid">
        <Form fluid>
          <Form.Item label="Username" name="name" help="Required">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" help="Required">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Textarea" name="textarea">
            <Input rows={5} componentClass="textarea" />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button appearance="primary">Submit</Button>
              <Button appearance="default">Reset</Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>
      </Demo>
    );
  },
}));

stories.add('horizontal', () => ({
  render() {
    return (
      <Demo title="Horizontal">
        <Form layout="horizontal">
          <Form.Item label="Username" name="name" help="Required" helpTooltip>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" help="Required">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Textarea" name="textarea">
            <Input rows={5} componentClass="textarea" />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button appearance="primary">Submit</Button>
              <Button appearance="default">Reset</Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>
      </Demo>
    );
  },
}));

stories.add('inline', () => ({
  render() {
    return (
      <Demo title="Inline">
        <Form layout="inline">
          <Form.Item name="username" label="Username">
            <Input style={{ width: '160px' }} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input
              style={{ width: '160px' }}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Button>Login</Button>
        </Form>

        <hr />

        <Form layout="inline">
          <Form.Item name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button>Login</Button>
        </Form>
      </Demo>
    );
  },
}));

stories.add('modal', () => ({
  data() {
    return {
      visible: false,
    };
  },

  render() {
    return (
      <Demo title="Modal">
        <Button.Toolbar>
          <Button onClick={this._handleOpen}>Open</Button>
        </Button.Toolbar>

        <Modal
          title="Modal Form"
          size="xs"
          visible={this.visible}
          onChange={v => (this.visible = v)}
        >
          <Form fluid>
            <Form.Item label="Username" name="name" help="Required">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" help="Required">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <Form.Item label="Textarea" name="textarea">
              <Input rows={5} componentClass="textarea" />
            </Form.Item>
          </Form>
        </Modal>
      </Demo>
    );
  },

  methods: {
    _handleOpen() {
      this.visible = !this.visible;
    },
  },
}));

stories.add('help', () => ({
  render() {
    return (
      <Demo title="Help">
        <Form>
          <Form.Item name="email" help="This field is required">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="name" help="This field is required" helpTooltip>
            <Input placeholder="Name" type="email" />
          </Form.Item>
        </Form>
      </Demo>
    );
  },
}));

stories.add('error', () => ({
  data() {
    return {
      showErrors: false,
      errorPlacement: 'bottom-start',
    };
  },

  render() {
    const placements = [
      {
        label: 'bottom-start',
        value: 'bottom-start',
      },
      {
        label: 'bottom-end',
        value: 'bottom-end',
      },
      {
        label: 'top-start',
        value: 'top-start',
      },
      {
        label: 'top-end',
        value: 'top-end',
      },
      {
        label: 'left-start',
        value: 'left-start',
      },
      {
        label: 'left-end',
        value: 'left-end',
      },
      {
        label: 'right-start',
        value: 'right-start',
      },
      {
        label: 'right-end',
        value: 'right-end',
      },
    ];

    return (
      <Demo title="Error">
        <Form errorShow={this.showErrors} errorPlacement={this.errorPlacement}>
          <Form.Item name="email" errorMessage="This field is required">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="age"
            errorMessage="This field is required"
            scopedSlots={{ errorMessage: this._renderError }}
          >
            <Input placeholder="Custom error message" />
          </Form.Item>
        </Form>

        <hr />

        {'Show Error:'}
        <Toggle
          style={{ margin: '0 10px' }}
          checked={this.showErrors}
          onChange={this._handleShowChange}
        />
        <SelectPicker
          data={placements}
          cleanable={false}
          value={this.errorPlacement}
          onChange={this._handlePlacementChange}
        />
      </Demo>
    );
  },

  methods: {
    _renderError(h, { show, error, placement }) {
      const styles = {
        display: show ? 'block' : 'none',
        color: 'red',
        marginTop: '6px',
        textAlign: /-start/.test(placement) ? 'left' : 'right',
      };

      return <div style={styles}>{error}</div>;
    },

    _handleShowChange(checked) {
      this.showErrors = checked;
    },

    _handlePlacementChange(placement) {
      this.errorPlacement = placement;
    },
  },
}));

stories.add('validate form', () => ({
  data() {
    return {
      formValue: {
        name: '',
        email: '',
      },
      rules: {
        name: StringType().isRequired('用户名不能为空'),
        email: StringType()
          .isEmail('邮箱不符合规范')
          .isRequired('邮箱不能为空'),
      },
    };
  },

  render() {
    return (
      <Demo title="Validate Form">
        <Form
          value={this.formValue}
          rules={this.rules}
          onSubmit={this._handleSubmit}
          onReset={this._handleReset}
        >
          <Form.Item name="name">
            <Input
              placeholder="Username"
              value={this.formValue.name}
              onChange={val => (this.formValue.name = val)}
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              placeholder="Email Address"
              value={this.formValue.email}
              onChange={val => (this.formValue.email = val)}
            />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <Button type="reset" appearance="default">
                Reset
              </Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>

        <hr />

        <JsonPretty data={this.formValue} />
      </Demo>
    );
  },

  methods: {
    _handleSubmit(hasError) {
      if (hasError) return;

      this.$Alert.info('submit');
    },

    _handleReset() {
      this.$Alert.info('reset');
    },
  },
}));

stories.add('form component', () => ({
  data() {
    return {
      formValue: {
        radio: false,
        radioGroup: '',
        checkbox: false,
        checkboxGroup: [],
        toggle: false,
        input: '',
        textarea: '',
        inputnumber: '',
        autoComplete: '',
        inputPicker: '',
        tagPicker: [],
        selectPicker: '',
        checkPicker: [],
        cascader: '',
        datePicker: '',
        dateRangePicker: [],
        slider: undefined,
      },
      rules: {
        radio: BooleanType()
          /* eslint-disable standard/no-callback-literal */
          .addRule((v, _, cb) => cb(v === true))
          .isRequired('radio cannot be empty'),
        radioGroup: StringType().isRequired('radioGroup cannot be empty'),
        checkbox: BooleanType()
          .addRule((v, _, cb) => cb(v === true))
          .isRequired('checkbox cannot be empty'),
        checkboxGroup: ArrayType()
          .of(StringType())
          .isRequired('checkbox cannot be empty'),
        toggle: BooleanType()
          .addRule((v, _, cb) => cb(v === true))
          .isRequired('toggle cannot be empty'),
        input: StringType().isRequired('input cannot be empty'),
        textarea: StringType().isRequired('textarea cannot be empty'),
        inputnumber: NumberType().isRequired('inputnumber cannot be empty'),
        autoComplete: StringType().isRequired('autoComplete cannot be empty'),
        inputPicker: StringType().isRequired('inputPicker cannot be empty'),
        tagPicker: ArrayType()
          .of(StringType())
          .isRequired('tagPicker cannot be empty'),
        selectPicker: StringType().isRequired('selectPicker cannot be empty'),
        checkPicker: ArrayType()
          .of(StringType())
          .isRequired('checkPicker cannot be empty'),
        cascader: ObjectType()
          .shape({
            id: NumberType().isRequired('id cannot be empty'),
          })
          .isRequired('cascader cannot be empty'),
        datePicker: DateType().isRequired('datePicker cannot be empty'),
        dateRangePicker: ArrayType()
          .of(DateType())
          .isRequired('dateRangePicker cannot be empty'),
        slider: NumberType().isRequired('slider cannot be empty'),
      },
    };
  },

  render() {
    return (
      <Demo title="Form Component">
        <Form
          value={this.formValue}
          rules={this.rules}
          onSubmit={this._handleSubmit}
          onReset={this._handleReset}
        >
          {/* Radio */}
          <Form.Item name="radio" label="Radio">
            <Radio
              checked={this.formValue.radio}
              onChange={val => (this.formValue.radio = val)}
            >
              Radio
            </Radio>
          </Form.Item>

          {/* RadioGroup */}
          <Form.Item name="radioGroup" label="Radio Group">
            <RadioGroup
              inline
              value={this.formValue.radioGroup}
              onChange={val => (this.formValue.radioGroup = val)}
            >
              <Radio value="radio1">Radio1</Radio>
              <Radio value="radio2">Radio2</Radio>
            </RadioGroup>
          </Form.Item>

          {/* Checkbox */}
          <Form.Item name="checkbox" label="Checkbox">
            <Checkbox
              checked={this.formValue.checkbox}
              onChange={val => (this.formValue.checkbox = val)}
            >
              Checkbox
            </Checkbox>
          </Form.Item>

          {/* CheckboxGroup */}
          <Form.Item name="checkboxGroup" label="Checkbox Group">
            <CheckboxGroup
              inline
              value={this.formValue.checkboxGroup}
              onChange={val => (this.formValue.checkboxGroup = val)}
            >
              <Checkbox value="checkbox1">Checkbox1</Checkbox>
              <Checkbox value="checkbox2">Checkbox2</Checkbox>
            </CheckboxGroup>
          </Form.Item>

          {/* Toggle */}
          <Form.Item name="toggle" label="Toggle">
            <Toggle
              checked={this.formValue.toggle}
              onChange={val => (this.formValue.toggle = val)}
            >
              <Icon slot="open" icon="check" />
              <Icon slot="close" icon="close" />
            </Toggle>
          </Form.Item>

          {/* Input */}
          <Form.Item name="input" label="Input">
            <Input
              placeholder="Input"
              value={this.formValue.input}
              onChange={val => (this.formValue.input = val)}
            />
          </Form.Item>

          {/* Input Textarea */}
          <Form.Item name="textarea" label="Textarea">
            <Input
              componentClass="textarea"
              rows={3}
              placeholder="Textarea"
              value={this.formValue.textarea}
              onChange={val => (this.formValue.textarea = val)}
            />
          </Form.Item>

          {/* InputNumber */}
          <Form.Item name="inputnumber" label="InputNumber">
            <InputNumber
              prefix="$"
              value={this.formValue.inputnumber}
              onChange={val => (this.formValue.inputnumber = val)}
            />
          </Form.Item>

          {/* Autocomplete */}
          <Form.Item name="autoComplete" label="AutoComplete">
            <AutoComplete
              data={[
                'HYPER Advertiser',
                'HYPER Web Analytics',
                'HYPER Video Analytics',
                'HYPER DMP',
                'HYPER Ad Serving',
                'HYPER Data Discovery',
              ]}
              value={this.formValue.autoComplete}
              onChange={val => (this.formValue.autoComplete = val)}
            />
          </Form.Item>

          {/* InputPicker */}
          <Form.Item name="inputPicker" label="InputPicker">
            <InputPicker
              data={users}
              value={this.formValue.inputPicker}
              onChange={val => (this.formValue.inputPicker = val)}
            />
          </Form.Item>

          {/* TagPicker */}
          <Form.Item name="tagPicker" label="TagPicker">
            <TagPicker
              data={users}
              value={this.formValue.tagPicker}
              onChange={val => (this.formValue.tagPicker = val)}
            />
          </Form.Item>

          {/* SelectPicker */}
          <Form.Item name="selectPicker" label="SelectPicker">
            <SelectPicker
              data={users}
              value={this.formValue.selectPicker}
              onChange={val => (this.formValue.selectPicker = val)}
            />
          </Form.Item>

          {/* CheckPicker */}
          <Form.Item name="checkPicker" label="CheckPicker">
            <CheckPicker
              data={users}
              value={this.formValue.checkPicker}
              onChange={val => (this.formValue.checkPicker = val)}
            />
          </Form.Item>

          {/* Cascader */}
          <Form.Item name="cascader" label="Cascader">
            <Cascader
              data={city}
              value={this.formValue.cascader}
              onChange={val => (this.formValue.cascader = val)}
            />
          </Form.Item>

          {/* DatePicker */}
          <Form.Item name="datePicker" label="DatePicker">
            <DatePicker
              value={this.formValue.datePicker}
              onChange={val => (this.formValue.datePicker = val)}
            />
          </Form.Item>

          {/* DateRangePicker */}
          <Form.Item name="dateRangePicker" label="DateRangePicker">
            <DateRangePicker
              value={this.formValue.dateRangePicker}
              onChange={val => (this.formValue.dateRangePicker = val)}
            />
          </Form.Item>

          {/* Slider */}
          <Form.Item name="slider" label="Slider">
            <Slider
              value={this.formValue.slider}
              onChange={val => (this.formValue.slider = val)}
              progress
            />
          </Form.Item>

          <Form.Item>
            <Button.Toolbar>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <Button type="reset" appearance="default">
                Reset
              </Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>

        <hr />

        <JsonPretty data={this.formValue} />
      </Demo>
    );
  },

  methods: {
    _handleSubmit(hasError) {
      if (hasError) return;

      this.$Alert.info('submit');
    },

    _handleReset() {
      this.$Alert.info('reset');
    },
  },
}));

stories.add('keypath', () => ({
  data() {
    return {
      formValue: {
        name: '',
        email: '',
        websites: ['', ''],
      },
    };
  },

  render() {
    return (
      <Demo title="Validate Form">
        <Form
          value={this.formValue}
          rules={this.rules}
          onSubmit={this._handleSubmit}
          onReset={this._handleReset}
        >
          <Form.Item
            name="name"
            rule={StringType().isRequired('用户名不能为空')}
          >
            <Input
              placeholder="Username"
              value={this.formValue.name}
              onChange={val => (this.formValue.name = val)}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rule={StringType()
              .isEmail('邮箱不符合规范')
              .isRequired('邮箱不能为空')}
          >
            <Input
              placeholder="Email Address"
              value={this.formValue.email}
              onChange={val => (this.formValue.email = val)}
            />
          </Form.Item>
          <Form.Item
            name="websites[0]"
            rule={StringType()
              .isURL('网站')
              .isRequired('网站必须')}
          >
            <Input
              placeholder="Website 1"
              value={this.formValue.websites[0]}
              onChange={val => this.$set(this.formValue.websites, '0', val)}
            />
          </Form.Item>
          <Form.Item
            name="websites[1]"
            rule={StringType()
              .isURL('网站')
              .isRequired('网站必须')}
          >
            <Input
              placeholder="Website 2"
              value={this.formValue.websites[1]}
              onChange={val => this.$set(this.formValue.websites, '1', val)}
            />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <Button type="reset" appearance="default">
                Reset
              </Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>

        <hr />

        <JsonPretty data={this.formValue} />
      </Demo>
    );
  },

  methods: {
    _handleSubmit(hasError) {
      if (hasError) return;

      this.$Alert.info('submit');
    },

    _handleReset() {
      this.$Alert.info('reset');
    },
  },
}));

stories.add('trigger', () => ({
  data() {
    return {
      formValue: { email: '' },
      trigger: 'change',
    };
  },

  render() {
    return (
      <Demo title="Validate Form">
        <RadioGroup value={this.trigger} onChange={val => (this.trigger = val)}>
          <Radio value="change">Change</Radio>
          <Radio value="blur">Blur</Radio>
          <Radio value="none">None</Radio>
        </RadioGroup>

        <hr />

        <Form
          value={this.formValue}
          checkTrigger={this.trigger}
          onSubmit={this._handleSubmit}
          onReset={this._handleReset}
        >
          <Form.Item
            label="邮箱"
            name="email"
            rule={StringType()
              .isEmail('邮箱格式不正确')
              .isRequired('邮箱不能为空')}
          >
            <Input
              placeholder="Email"
              value={this.formValue.email}
              onChange={val => (this.formValue.email = val)}
            />
          </Form.Item>
          <Form.Item>
            <Button.Toolbar>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <Button type="reset" appearance="default">
                Reset
              </Button>
            </Button.Toolbar>
          </Form.Item>
        </Form>

        <hr />

        <JsonPretty data={this.formValue} />
      </Demo>
    );
  },

  methods: {
    _handleSubmit(hasError) {
      if (hasError) return;

      this.$Alert.info('submit');
    },

    _handleReset() {
      this.$Alert.info('reset');
    },
  },
}));
