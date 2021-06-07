import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const ISRById = ({ animeQuotation, id }) => {
  const router = useRouter();

  // If the fallback page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
    revalidate: 10,
  };
}

export const getStaticPaths = async () => {
  // Only `/isr/1` ~ `/isr/5` are generated at build time
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
    { params: { id: "5" } },
  ];

  return {
    paths,
    //【 fallback: true 】
    // Enable statically generating additional pages
    // For example: `/isr/9`
    fallback: true,
  };
};

export default ISRById;
