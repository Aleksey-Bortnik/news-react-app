// import { REQUEST_URL } from "../constants/news";
// import { converter } from "./converter";
import { MOCK_NEWS } from "./../../__MOCK__/mockNews.js";

export const getNews = () =>
  // fetch(REQUEST_URL)
  //   .then((response) => response.json())
  //   .then((data) => converter(data.response.results))
  //   .catch(() => MOCK_NEWS);
  Promise.resolve(() => MOCK_NEWS)
