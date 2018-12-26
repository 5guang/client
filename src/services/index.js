import Http from './http';

export const sendMsgApi = data => Http.post('api/user/getotp', data);
export const loginApi = data => Http.post('api/user/login', data);
export const registerApi = data => Http.post('api/user/register', data);
export const getUserApi = data => Http.get('api/user/getUser', data);
export const createApi = data => Http.post('api/item/create', data);
export const getItemApi = data => Http.get('api/item/getItem', data);
export const getListApi = data => Http.get('api/item/list', data);
export const createorderApi = data => Http.post('api/order/createorder', data);

export default {
  install: (Vue) => {
    Vue.prototype.$http = {
      sendMsgApi,
      loginApi,
      registerApi,
      getUserApi,
      getItemApi,
      createApi,
      getListApi,
      createorderApi,
    };
  },
};
