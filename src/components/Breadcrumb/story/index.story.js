import { storiesOf } from '@storybook/vue';

import Breadcrumb from 'components/Breadcrumb';
import Demo from 'stories/demo';

const stories = storiesOf('Navigation|Breadcrumb', module);

stories.add('basic', () => ({
  render() {
    return (
      <Demo title="Basic">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Components</Breadcrumb.Item>
          <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
      </Demo>
    );
  },
}));

stories.add('separator', () => ({
  render() {
    return (
      <Demo title="Separator">
        <Breadcrumb separator="chevron-right">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Components</Breadcrumb.Item>
          <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
      </Demo>
    );
  },
}));

// stories.add('router-link', () => ({
//   render() {
//     return (
//       <Demo title="RouterLink">
//         <Breadcrumb separator="chevron-right">
//           <Breadcrumb.Item componentClass="router-link" to="/home">
//             Home
//           </Breadcrumb.Item>
//           <Breadcrumb.Item componentClass="router-link" to="/components">
//             Components
//           </Breadcrumb.Item>
//           <Breadcrumb.Item
//             componentClass="router-link"
//             to="/components/breadcrumb"
//             active
//           >
//             Breadcrumb
//           </Breadcrumb.Item>
//         </Breadcrumb>
//       </Demo>
//     );
//   },
// }));
