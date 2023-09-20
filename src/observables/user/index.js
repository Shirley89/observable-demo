import { createObservableKit } from "@bdlite/observable/es/create-observable-kit";
import { CHANNEL_NAME } from "./constants";

// 登录用户信息
const { getData, subscribe, publish } = createObservableKit(
  {
    id: "null",
    name: "observable-defalut-value",
    email: "observable-defalut-value"
  },
  null,
  { channelName: CHANNEL_NAME }
);
const _userInfo = getData();

export const subscribeUser = subscribe;

/**
 * @function storeUser
 * @param {?object} user
 */
export function storeUser(user) {
  if (!user) return;
  const { mobile = "", name = "", character = "", email = "", ...rest } = user;
  Object.assign(_userInfo, { mobile, name, character, email, ...rest });
  publish({ ..._userInfo });
}

/**
 * @function getUser
 * @returns {object} userInfo
 */
export function getUser() {
  return { ..._userInfo };
}

/**
 * @function getUserId
 * @returns {?number} id
 */
export function getUserId() {
  return _userInfo.id;
}
