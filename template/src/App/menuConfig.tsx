import React from "react";

import { MailOutlined } from '@ant-design/icons';
import type {
  NavConfig
} from '../components';

const menuConfig: Array<NavConfig> = [
  { key: 'one', title: 'Click Me', path: './one' },
  { key: 'two', title: 'Click Me Also', path: './two', icon: <MailOutlined /> },
  { key: 'three', title: 'external', externalPath: true, path: 'https://google.com' },
  { key: 'foru', title: 'Disabled', path: './one', disabled: true },
];

export default menuConfig;
