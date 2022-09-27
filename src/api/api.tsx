const apiData = {
  getData(url: string, header: HeadersInit) {
    return fetch(url, {
      headers: header,
    }).then((response) => response.json());
  },
};

export { apiData };
