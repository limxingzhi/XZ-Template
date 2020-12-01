import React from 'react';
import {
  Typography
} from 'antd';

import {
  Counter,
} from '../../components';

const {
  Paragraph
} = Typography;

const DemoTwoPage: React.FC = () => <div>
  <Paragraph>I am the second page, I am lazy loaded in.</Paragraph>
  <Counter />
</div>

export default DemoTwoPage;
