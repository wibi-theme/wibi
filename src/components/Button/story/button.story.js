import { storiesOf } from '@storybook/vue';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Demo from 'stories/demo';
import * as SvgIcons from 'stories/svg';

const IconButton = Button.Icon;
const ButtonGroup = Button.Group;
const ButtonToolbar = Button.Toolbar;

const stories = storiesOf('General|Button', module);

stories.add('Basic', () => ({
  render() {
    return (
      <Demo title="Default">
        <Button>Default</Button>
      </Demo>
    );
  },
}));

stories.add(
  'appearance',
  () => ({
    render() {
      return (
        <Demo title="Appearance">
          <ButtonToolbar>
            <Button appearance="default">Default</Button>
            <Button appearance="primary">Primary</Button>
            <Button appearance="link" href="#">
              Link
            </Button>
            <Button appearance="subtle">Subtle</Button>
            <Button appearance="ghost">Ghost</Button>
          </ButtonToolbar>
        </Demo>
      );
    },
  }),
  {
    notes: `
### Appearance

\`appearance\` property can set appearance of button:

- 'default'(default) default button.
- 'primary' Emphasi, guide button.
- 'link' Button like link.
- 'subtle' Weakened button.
- 'ghost' Ghost button, background transparent, place button on background element.
`,
  }
);

stories.add(
  'size',
  () => ({
    render() {
      return (
        <Demo title="Default">
          <ButtonToolbar>
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">Xsmall</Button>
          </ButtonToolbar>

          <ButtonToolbar>
            <IconButton icon="star" circle size="lg" />
            <IconButton icon="star" circle size="md" />
            <IconButton icon="star" circle size="sm" />
            <IconButton icon="star" circle size="xs" />
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup size="md">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup size="sm">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup size="xs">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Demo>
      );
    },
  }),
  {
    notes: `
### Size

The \`size\` property sets the button size, options includes: 'lg', 'md', 'sm', 'xs'.
`,
  }
);

stories.add(
  'color',
  () => ({
    render() {
      return (
        <Demo title="Color">
          <ButtonToolbar>
            <Button color="red">Red</Button>
            <Button color="orange">Orange</Button>
            <Button color="yellow">Yellow</Button>
            <Button color="green">Green</Button>
            <Button color="cyan">Cyan</Button>
            <Button color="blue">Blue</Button>
            <Button color="violet">Violet</Button>
          </ButtonToolbar>

          <ButtonToolbar style="background: #000; padding: 10px;">
            <Button color="red" appearance="ghost">
              Red
            </Button>
            <Button color="orange" appearance="ghost">
              Orange
            </Button>
            <Button color="yellow" appearance="ghost">
              Yellow
            </Button>
            <Button color="green" appearance="ghost">
              Green
            </Button>
            <Button color="cyan" appearance="ghost">
              Cyan
            </Button>
            <Button color="blue" appearance="ghost">
              Blue
            </Button>
            <Button color="violet" appearance="ghost">
              Violet
            </Button>
          </ButtonToolbar>
        </Demo>
      );
    },
  }),
  {
    notes: `
### Colorful button

The \`color\` property sets the button style, Options include: 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'.
`,
  }
);

stories.add(
  'custom',
  () => ({
    render() {
      return (
        <Demo title="Custom">
          <ButtonToolbar>
            <Button color="blue">
              <Icon icon="facebook-official" />
              {' Facebook'}
            </Button>
            <Button color="red">
              <Icon icon="google-plus-circle" />
              {' Google Plus'}
            </Button>
            <Button color="cyan">
              <Icon icon="twitter" />
              {' Twitter'}
            </Button>
            <Button color="blue">
              <Icon icon="linkedin" />
              {' LinkedIn'}
            </Button>
            <Button color="green">
              <Icon icon="wechat" />
              {' WeChat'}
            </Button>
            <Button color="yellow">
              <Icon icon="weibo" />
              {' WeiBo'}
            </Button>
          </ButtonToolbar>
        </Demo>
      );
    },
  }),
  {
    notes: `
### Custom combination button
`,
  }
);

stories.add(
  'icon-button',
  () => ({
    render() {
      return (
        <Demo title="IconButton">
          <ButtonToolbar>
            <IconButton icon="star" />
            <IconButton icon="star" appearance="primary" />
            <ButtonGroup>
              <IconButton icon="align-left" />
              <IconButton icon="align-center" />
              <IconButton icon="align-right" />
              <IconButton icon="align-justify" />
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <IconButton size="lg" icon="star" />
            <IconButton size="lg" icon={SvgIcons.search} />
            <IconButton size="md" icon="star" />
            <IconButton size="md" icon={SvgIcons.search} />
            <IconButton size="sm" icon="star" />
            <IconButton size="sm" icon={SvgIcons.search} />
            <IconButton size="xs" icon="star" />
            <IconButton size="xs" icon={SvgIcons.search} />
          </ButtonToolbar>

          <ButtonToolbar>
            <IconButton icon="facebook-official" color="blue" circle />
            <IconButton icon="google-plus-circle" color="red" circle />
            <IconButton icon="twitter" color="cyan" circle />
            <IconButton icon="linkedin" color="blue" circle />
          </ButtonToolbar>

          <ButtonToolbar>
            <IconButton icon="pause" placement="left">
              Pause
            </IconButton>
            <IconButton icon="arrow-right" placement="right">
              Next
            </IconButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <IconButton icon={SvgIcons.component}>Component</IconButton>
          </ButtonToolbar>
        </Demo>
      );
    },
  }),
  {
    notes: `
### IconButton

\`<IconButton>\` is a component designed for icon buttons that sets the icon required for the \`Icon\` property definition. Only the icon button can be set to a round button.
`,
  }
);
