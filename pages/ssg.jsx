import Layout from "../components/Layout";

const SSG = ({ poetryData }) => {
  return (
    <Layout>
      <h3>Static Site Generate</h3>
      <h4>
        當每次 user 進到頁面時，取得已經在 build time 製作好的靜態檔案並
        render，因此畫面一次到位，且資料不會在 runtime 更新。
      </h4>
      <li>特點一：畫面於 build time 時，在 Server 製作。</li>
      <li>特點二：不會在 runtime 更新資料。</li>
      <li>特點三：user 可以很快速的一次看到完整畫面。</li>
      <ul>
        <p>以下為同支 API 回傳的資料，可以觀察與 CSR/SSR 的差異：</p>
        <li>詩句: {poetryData.result.name}</li>
        <li>出處： {poetryData.result.from}</li>
        <li>詩句: {poetryData.result.name}</li>
        <li>出處： {poetryData.result.from}</li>
        <li>詩句: {poetryData.result.name}</li>
        <li>出處： {poetryData.result.from}</li>
      </ul>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://poetry.apiopen.top/sentences");
  const poetryData = await res.json();

  return {
    props: { poetryData },
  };
}

export default SSG;
