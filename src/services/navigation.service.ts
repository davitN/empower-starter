import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const _navigator = createNavigationContainerRef<any>();

// it doesn't store previous screen name all the time it provides
// data only for places screen
const placesNavData = {
  previousScreen: '',
  currentScreen: '',
};

const navData = {
  previousScreen: '',
  currentScreen: '',
};

function navigate(name: string, params: Object) {
  _navigator.current?.navigate(name, params);
}

function reset(routes: any) {
  _navigator.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes,
    }),
  );
}

function resetStack() {
  _navigator.current?.dispatch(StackActions.popToTop());
}

function replace(name: string, params: Object) {
  _navigator.current?.dispatch(StackActions.replace(name, params));
}

function goBack() {
  _navigator.current?.goBack();
}

function getCurrentRoute() {
  if (!_navigator.current) {
    return null;
  }
  return _navigator.current.getCurrentRoute();
}

export default {
  navigate,
  getCurrentRoute,
  reset,
  replace,
  goBack,
  resetStack,
  placesNavData,
  navData,
};
