import { useEffect, useState } from "react";

import { subscribeUser } from "./observables/user/channel";
import { storeUser } from "./observables/user";

import { getLogoutUserData } from "./mock/user";

export default function SubApp() {
  const [user, setUser] = useState({
    name: "subapp-default-value",
    email: "subapp-default-value"
  });

  const handleLogout = () => {
    storeUser(getLogoutUserData());
  };

  useEffect(() => {
    return subscribeUser((userData) => {
      setUser({ ...userData });
    });
  }, []);

  return [
    <h2 key="title">子应用1内容：</h2>,
    <p key="name">Signed User: {user.name}</p>,
    <p key="character">Email: {user.email}</p>,
    <button key="button" onClick={handleLogout}>
      登出账号
    </button>
  ];
}
