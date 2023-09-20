import { getUserId } from "./observables/user";
import SubPage from "./SubPage";
import SubPage2 from "./SubPage";

export default function Page(props) {
  return [
    <h2 key="title">本页内容</h2>,
    <p key="id">【注意，这是不准确的】同步方式获取的用户ID：{getUserId()}</p>,
    props.pageNum === 0 ? (
      <SubPage key="subpage" />
    ) : (
      <SubPage2 key="subpage" />
    ),
    <button key="btn" disabled={props.loading} onClick={props.onChange}>
      切换账号
    </button>,
  ];
}
