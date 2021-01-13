import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const CSR = () => {
  const [poetryData, setPoetryData] = useState({
    sentence: "Loading...",
    from: "Loading...",
  });

  useEffect(() => {
    fetch("http://poetry.apiopen.top/sentences")
      .then((res) => res.json())
      .then((json) => {
        const poetryResult = json.result;
        setPoetryData({
          sentence: poetryResult.name,
          from: poetryResult.from,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <h3>Client Side Render</h3>
      <h4>
        當每次 user 進到頁面時，畫面開始在 Client 端製作並 render，API
        資料也是在 Client 才獲取（可以看到 Loading
        被替換），因此畫面並非一次到位，而是批次到位。
      </h4>
      <li>特點一：畫面於 runtime 時，在 Client 製作。</li>
      <li>特點二：每次可取得 API 最新資料。</li>
      <li>特點三：user 可以很快看到畫面，但畫面是漸變，非一次到位。</li>
      <ul>
        <p>以下為同支 API 回傳的資料，可以觀察與 SSR/SSG 的差異：</p>
        <li>詩句：{poetryData.sentence}</li>
        <li>出處：{poetryData.from}</li>
        <li>詩句：{poetryData.sentence}</li>
        <li>出處：{poetryData.from}</li>
        <li>詩句：{poetryData.sentence}</li>
        <li>出處：{poetryData.from}</li>
      </ul>
    </Layout>
  );
};

export default CSR;
