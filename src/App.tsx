import React, { FunctionComponent, useState, useEffect } from "react";
import TitleComponent from "./components/TitleComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import ColumnNames from "./components/ColumnNames";
import DataTable from "./components/DataTable";
import "./App.scss";

const App: FunctionComponent = ({}) => {
  const accountApi: string =
    "https://recruitmentdb-508d.restdb.io/rest/accounts";
  const accountApiType: string =
    "https://recruitmentdb-508d.restdb.io/rest/accounttypes";

  const header: HeadersInit = {
    "x-apikey": "5d9f48133cbe87164d4bb12c",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [accountsData, setAccountsData] = useState<any[]>([]);
  const [accountsTypeData, setAccountsTypeData] = useState<any[]>([]);

  const fetchData = () => {
    // fetch(accountApi, {
    //   headers: header,
    // })
    //   .then(function (response) {
    //     if (response.ok) {
    //       console.log(response);
    //       return response.json();
    //     }
    //     throw response;
    //   })
    //   .then(function (data) {
    //     setAccountsData(data);
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.warn(error);
    //   });
    // fetch(accountApiType, {
    //   headers: header,
    // })
    //   .then(function (response) {
    //     if (response.ok) {
    //       console.log(response);
    //       return response.json();
    //     }
    //     throw response;
    //   })
    //   .then(function (data) {
    //     setAccountsTypeData(data);
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.warn(error);
    //   });
  };

  const urls = [accountApi, accountApiType];

  const getData = async () => {
    setLoading(true);
    const [acc, accType] = await Promise.all(
      urls.map((url) =>
        fetch(url, { headers: header }).then((res) => res.json())
      )
    );
    setLoading(false);
    setAccountsData(acc);
    setAccountsTypeData(accType);
    console.log(acc, accType);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TitleComponent />
      {accountsData.length > 0 ? <ColumnNames /> : <></>}
      {accountsData.length > 0 ? (
        accountsData.map((data) => {
          return (
            <>
              <DataTable
                id={data.id}
                name={data.name}
                currency={data.currency}
                prof={data.profitLoss}
              />
            </>
          );
        })
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
};

export default App;
