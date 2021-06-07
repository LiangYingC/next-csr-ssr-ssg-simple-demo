import Layout from "../../components/Layout";

const SSRById = ({ animeQuotation, id }) => {
  const animeQuotationSentence = animeQuotation.result.sentence;
  const animeQuotationFrom = animeQuotation.result.from;

  return (
    <Layout>
      <h3>SSR with Dynamic Router</h3>
      <ul>
        <p>id 為 {id} 的內容：</p>
        <p>
          {animeQuotationSentence} — {animeQuotationFrom}
        </p>
      </ul>
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(
    `${process.env.API_HOST_DOMAIN}/api/animeQuotationData/${id}`
  );

  const animeQuotation = await res.json();

  return {
    props: { animeQuotation, id },
  };
}

export default SSRById;
