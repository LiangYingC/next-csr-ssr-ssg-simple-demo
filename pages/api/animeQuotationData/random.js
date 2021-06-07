import animeQuotationList from "../../../data/animeQuotation";

export default function randomAnimeQuotationHandler(req, res) {
  const randomAnimeQuotation =
    animeQuotationList[Math.floor(Math.random() * animeQuotationList.length)];

  res.status(200).json({ result: randomAnimeQuotation });
}
