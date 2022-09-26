import React, { FunctionComponent, useState } from "react";
import TitleComponent from "./components/TitleComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import ColumnNames from "./components/ColumnNames";
import DataTable from "./components/DataTable";
import "./App.scss";

const App: FunctionComponent = ({}) => {
  const [accountsData, setAccountsData] = useState<any[]>([]);
  const [accountsTypeData, setAccountsTypeData] = useState<any[]>([]);

  fetch("https://recruitmentdb-508d.restdb.io/rest/accounts", {
    headers: {
      "x-apikey": "5d9f48133cbe87164d4bb12c",
    },
  })
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      setAccountsData(data);
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });

  fetch("https://recruitmentdb-508d.restdb.io/rest/accounttypes", {
    headers: {
      "x-apikey": "5d9f48133cbe87164d4bb12c",
    },
  })
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      setAccountsTypeData(data);
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });

  return (
    <>
      <TitleComponent />
      {accountsData.length > 0 ? <ColumnNames /> : <></>}
      {accountsData.length > 0 ? (
        accountsData.map((data) => {
          return (
            <>
              <DataTable
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
