import React from 'react';
import {
  Typography
} from 'antd';

const {
  Paragraph
} = Typography;

const DemoPage: React.FC = () => <div>
  <Paragraph>This is the first page, it is lazy loaded in.</Paragraph>
</div>

export default DemoPage;
