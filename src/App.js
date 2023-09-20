import "./styles.css";

import { useEffect, useState } from "react";

import { storeUser } from "./observables/user";
import { getUserData } from "./mock/user";

import Welcome from "./Welcome";
import Page from "./Page";
import SubApp from "./SubApp";
import SubApp2 from "./SubApp2";

const appNum = +window.location.pathname.split("/")[1] || 0;

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
      {appNum === 0 ? <Welcome /> : null}
      {appNum === 0 ? <Page loading={loading} onChange={change} /> : null}
      {appNum === 1 ? <SubApp loading={loading} /> : null}
      {appNum === 2 ? <SubApp2 /> : null}
      {appNum !== 0 ? <Page loading={loading} onChange={change} /> : null}
      {/* <>
        <br />
        appNum: {appNum}
        <br />
        next appNum: {appNum + 1}
      </> */}
      {appNum >= 3 ? null : (
        <iframe
          key="subapp"
          title={`self-${appNum}`}
          src={`https://demo.shirley89.com/${appNum + 1}`}
        />
      )}
    </div>
  );
}
