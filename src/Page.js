import { getUserId } from "./observables/user";
import SubPage from "./SubPage";
import SubPage2 from "./SubPage2";

export default function Page({ pageNum, loading, onChange }) {
  return [
    <h2 key="title">本页内容</h2>,
    <p key="id">【注意，这是不准确的】同步方式获取的用户ID：{getUserId()}</p>,
    pageNum === 0 ? (
      <SubPage key="subpage" loading={loading} />
    ) : (
      <SubPage2 key="subpage" />
    ),
    <button key="btn" disabled={loading} onClick={onChange}>
      {pageNum !== 0 && loading ? "正在切换" : "切换账号"}
    </button>,
    pageNum !== 0 ? (
      <p key="tip">【切换完成后会广播同时更新本页数据】</p>
    ) : null,
  ];
}
