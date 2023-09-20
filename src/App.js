import "./styles.css";

import { useEffect, useState } from "react";

import { storeUser } from "./observables/user";
import { getUserData } from "./mock/user";

import SubApp from "./SubApp";
import SubApp2 from "./SubApp2";
import Page from "./Page";

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
      <h1>Hello CodeSandbox</h1>
      <Page loading={loading} onChange={change} />
      <SubApp />
      {loading ? <h2>loading...</h2> : <SubApp2 />}
    </div>
  );
}
