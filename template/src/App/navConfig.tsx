import React from "react";
import { MailOutlined } from '@ant-design/icons';

import type {
  TabConfig
} from '../components';

const tabConfig: Array<TabConfig> = [
  { key: 'one', title: 'Click Me', path: './one' },
  { key: 'two', title: 'Click Me Also', path: './two', icon: <MailOutlined /> },
  { key: 'three', title: 'external', externalPath: true, path: 'https://google.com' },
  { key: 'four', title: 'Disabled', path: './one', disabled: true },
];

export {
  tabConfig,
};
