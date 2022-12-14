const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.userInfo.staffPhoto,
  name: (state) => state.user.userInfo.username,
  userId: (state) => state.user.userInfo.userId,
  companyId: (state) => state.user.userInfo.companyId,
  routes: (state) => state.permission.routes,
  companyName: (state) => state.user.userInfo.companyName,
};
export default getters;
