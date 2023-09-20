import { useEffect, useState } from "react";

import { subscribeUser } from "./observables/user/channel";

export default function SubApp(props) {
  const [user, setUser] = useState({
    name: "subpage-value",
    email: "subpage-value",
  });

  useEffect(() => {
    return subscribeUser((userData) => {
      setUser({ ...userData });
    });
  }, []);

  return [
    <p key="name">通道获取 用户名: {props.loading ? "loading..." : user.name}</p>,
    <p key="character">通道获取 邮箱: {props.loading ? "loading..." : user.name}</p>,
  ];
}
