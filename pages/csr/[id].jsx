import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const CSRById = () => {
  const router = useRouter();
  const { id } = router.query;

  const [animeQuotation, setAnimeQuotation] = useState({
    id: "Loading...",
    sentence: "Loading...",
    from: "Loading...",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/animeQuotationData/${id}`)
        .then((res) => res.json())
        .then((json) => {
          const animeQuotationResult = json.result;

          setAnimeQuotation({
            id: id,
            sentence: animeQuotationResult.sentence,
            from: animeQuotationResult.from,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <Layout>
      <h3>CSR with Dynamic Router</h3>
      <ul>
        <p>id 為 {animeQuotation.id} 的內容：</p>
        <p>
          {animeQuotation.sentence} — {animeQuotation.from}
        </p>
      </ul>
    </Layout>
  );
};

export default CSRById;
