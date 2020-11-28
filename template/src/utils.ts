import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const changeDocumentTitle = (newTitle: string, showTag: boolean = true): void => {
  document.title = newTitle + ((showTag) ? ` - XZ Template` : ``);
}

export {
  history,
  changeDocumentTitle,
};
