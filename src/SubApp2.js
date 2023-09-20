import { useEffect, useState } from "react";

import { subscribeUser } from "./observables/user/channel";

export default function SubApp() {
  const [user, setUser] = useState({});

  useEffect(() => {
    return subscribeUser((userData) => {
      setUser({ ...userData });
    });
  }, []);

  return [
    <h2 key="title">子应用2内容：</h2>,
    <p key="name">通道获取的用户ID【这是实时变化的】：{user.id}</p>,
    <iframe key="subapp" title="self" src="https://demo.shirley89.com/" />,
  ];
}
