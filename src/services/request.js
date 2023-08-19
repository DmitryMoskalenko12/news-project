export function fetchServerData(limit, page, dataServer) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = dataServer.slice(startIndex, endIndex);
 /*  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(slicedData);
    }, 300);
  }); */
  return slicedData
}

export function filterId(id, array) {
  const res = array.find(item => item.id === id);
  return res;
}