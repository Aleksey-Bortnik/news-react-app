export const converter = (resultsFromServer) => {
  return resultsFromServer.map((result) => {
    return {
      id: result.id,
      title: result.webTitle,
      description: result.description,
      imageUrl: result.urlToImage,
      author: result.author,
      link: result.webUrl,
      category: result.sectionName,
      releaseDate: result.webPublicationDate,
    };
  });
};
