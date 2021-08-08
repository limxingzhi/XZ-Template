import { APP_TITLE } from 'constant';

export const changeTitle = (title: string) : void => {
  const prefix = title ? `${title} - ` : '';
  document.title = `${prefix}${APP_TITLE}`;
}