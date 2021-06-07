import animeQuotationList from "../../../data/animeQuotation";

export default function animeQuotationHandler({ query: { id } }, res) {
  const filteredResult = animeQuotationList.filter(
    (animeQuotation) => animeQuotation.id === id
  );

  if (filteredResult.length > 0) {
    res.status(200).json({ result: filteredResult[0] });
  } else {
    res
      .status(404)
      .json({ message: `AnimeQuotation with id: ${id} not found.` });
  }
}
