import { store, appconfigSlice } from "utils/redux";

const useNavigation = (): any => {
  const updateHistory = (pageData: any) => {
    store.dispatch(appconfigSlice.actions.updatePage(pageData));
  };

  return updateHistory;
};

export { useNavigation };
