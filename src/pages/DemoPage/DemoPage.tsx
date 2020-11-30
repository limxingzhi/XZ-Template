import React from 'react';
import {
  Typography,
  Divider,
} from 'antd';

const {
  Paragraph,
  Title,
} = Typography;

const DemoPage: React.FC = () => <div>
  <Paragraph>This page is loaded in.</Paragraph>
  <Title level={1}>Configuration</Title>
  <Paragraph>The top navigation bar is configurable through a JSON at <code>/src/App/tabConfig.tsx</code>.</Paragraph>
  <Paragraph>The side collapsible bar is a component loaded as a prop for the Layout component under<code>/src/App/App.tsx</code>.</Paragraph>
  <Paragraph>Ant design makes it particularly difficult to change themes during runtime. If you wish to statically change between light/dark themes during compile time, you can do so under <code>/src/style.less</code>.</Paragraph>
  <Divider />
  <Title level={1}>Motivation</Title>
  <Paragraph>This app skeleton design was loosely based around another design I made for a school project. It originates from the idea where it has to be incredibly easy to add in new functionality. If I were to pick a targeted audience for this, I will say its for students trying to quickly kick start a react project without having to set up a ton of boilerplate code like a navigation bar, routing, TypeScript support, determining how the app strucutre should look like, all that boring stuff.</Paragraph>
  <Paragraph>The only thing not pre-configured is global state management.</Paragraph>
  <Divider />
  <Title level={1}>App Skeleton Usage - Page VS Component</Title>
  <Paragraph>In theory, page components are meant to act as wrappers. You can do data fetching or state management here and pass them to your React Components as reactive props. You can do routes specific functionality here too, like interacting with SessionStorage or logging or analytics. The components more or less act as a traditional react components.</Paragraph>
  <Paragraph>The goal of splitting Pages and Components into 2 distinct and logical categories is to split their responsiblities. For example, we can test our Components very easily without the need for hydrating a global state or do data-fetching since that is the responsibility of the Page. We can also normalize the fetched / global state data at the Page level and let it cascade down the tree rather than doing it at every single component.</Paragraph>
</div>

export default DemoPage;
