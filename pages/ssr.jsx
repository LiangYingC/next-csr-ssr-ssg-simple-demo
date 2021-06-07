import Layout from "../components/Layout";

const SSR = ({ animeQuotation }) => {
  const animeQuotationSentence = animeQuotation.result.sentence;
  const animeQuotationFrom = animeQuotation.result.from;

  return (
    <Layout>
      <h3>Server Side Render</h3>
      <h4>
        當 user 進到頁面時，畫面會在 Server 端製作，製作過程中也會打 API
        獲取最新資料。當畫面與資料製作完成，並傳回 Client 後才會
        render。因此畫面是一次到位。
      </h4>
      <li>特點一：畫面於 runtime 時，在 Server 製作。</li>
      <li>特點二：每次可取得 API 最新資料。</li>
      <li>特點三：user 會需要等待 Server 製作完，才一起看到完整畫面。</li>
      <ul>
        <p>以下為同支 API 回傳的資料，可以觀察與 CSR/SSR/SSG/ISR 的差異：</p>
        <li>詩句: {animeQuotationSentence}</li>
        <li>出處： {animeQuotationFrom}</li>
        <li>詩句: {animeQuotationSentence}</li>
        <li>出處： {animeQuotationFrom}</li>
        <li>詩句: {animeQuotationSentence}</li>
        <li>出處： {animeQuotationFrom}</li>
      </ul>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://poetry.apiopen.top/sentences`);

  const animeQuotation = await res.json();

  return {
    props: { animeQuotation },
  };
}

export default SSR;
