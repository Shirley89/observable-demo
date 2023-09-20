import "./styles.css";

import { useEffect, useState } from "react";

import { storeUser } from "./observables/user";
import { getUserData } from "./mock/user";

import Welcome from "./Welcome";
import Page from "./Page";
import SubApp from "./SubApp";
import SubApp2 from "./SubApp2";

export default function App() {
  const [loading, setLoading] = useState(false);

  function change() {
    setLoading(true);
    setTimeout(() => {
      storeUser(getUserData());
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setTimeout(change, 1000);
  }, []);

  return (
    <div className="App">
      <Welcome />
      <Page loading={loading} onChange={change} />
      <SubApp loading={loading} />
      <SubApp2 />
      {/* <>pathname: {window.location.pathname}</> */}
      <iframe key="subapp" title="self" src="https://demo.shirley89.com/" />
    </div>
  );
}
