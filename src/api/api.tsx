const accountApi: string = "https://recruitmentdb-508d.restdb.io/rest/accounts";
const accountApiType: string =
  "https://recruitmentdb-508d.restdb.io/rest/accounttypes";

const header: HeadersInit = {
  "x-apikey": "5d9f48133cbe87164d4bb12c",
};

const apiData = {
  getDataAccount() {
    return fetch(accountApi, {
      headers: header,
    }).then((response) => {
      console.log(response.status);
      return response.json();
    });
  },
  getDataAccountType() {
    return fetch(accountApiType, {
      headers: header,
    }).then((response) => {
      console.log(response.status);
      return response.json();
    });
  },
};

export { apiData };
