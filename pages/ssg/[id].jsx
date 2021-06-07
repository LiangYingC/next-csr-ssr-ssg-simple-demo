import Layout from "../../components/Layout";

const SSGById = ({ animeQuotation, id }) => {
  const animeQuotationSentence = animeQuotation.result.sentence;
  const animeQuotationFrom = animeQuotation.result.from;

  return (
    <Layout>
      <h3>SSG with Dynamic Router</h3>
      <ul>
        <p>id 為 {id} 的內容：</p>
        <p>
          {animeQuotationSentence} — {animeQuotationFrom}
        </p>
      </ul>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(
    `https://next-csr-ssr-ssg-isr-demo.vercel.app/api/animeQuotationData/${id}`
  );

  const animeQuotation = await res.json();

  return {
    props: { animeQuotation, id },
  };
}

// This also gets called at build time
// If a page has dynamic routes and uses getStaticProps
// It needs to define a list of paths that have to be rendered to HTML at build time
export const getStaticPaths = async () => {
  const paths = [...Array(8)].map((_, index) => {
    return {
      params: {
        id: `${index + 1}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SSGById;
