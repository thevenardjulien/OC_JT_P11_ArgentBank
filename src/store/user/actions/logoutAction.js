export const logoutAction = (state, action) => {
  state.value = "";
  sessionStorage.clear();
};
