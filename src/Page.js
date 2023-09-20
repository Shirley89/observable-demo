import { getUserId } from "./observables/user";
import SubPage from "./SubPage";

export default function Page(props) {
  return (
    <div>
      <h2>同页内容</h2>
      <p>同步获取的用户ID【注意，这是不准确的】：{getUserId()}</p>
      <SubPage />
      <button disabled={props.loading} onClick={props.onChange}>
        切换账号
      </button>
    </div>
  );
}
