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
    <p key="id">【这是实时变化的】通道获取的用户ID：{user.id}</p>,
    <p key="name">通道获取 用户名: {user.name}</p>,
    <p key="email">通道获取 邮箱: {user.email}</p>,
  ];
}
