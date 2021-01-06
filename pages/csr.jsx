import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const CSR = () => {
  const [poetryData, setPoetryData] = useState({
    sentence: "Loading...",
    from: "Loading..."
  });

  useEffect(() => {
    fetch("http://poetry.apiopen.top/sentences")
      .then(res => res.json())
      .then(json => {
        const poetryResult = json.result;
        setPoetryData({
          sentence: poetryResult.name,
          from: poetryResult.from
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <h3>Client Side Render</h3>
      <h4>
        當 user 進到頁面時，畫面開始在 Client 端製作並 render，API 資料也是在
        Client 才獲取 (可以看到 Loading
        被替換)，因此畫面並非一次到位，而是批次到位。
      </h4>
      <ul>
        <li>API 回傳的詩句：{poetryData.sentence}</li>
        <li>API 回傳的詩句出處：{poetryData.from}</li>
      </ul>
    </Layout>
  );
};

export default CSR;
