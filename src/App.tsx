import React, { FunctionComponent, useState, useEffect } from "react";
import TitleComponent from "./components/TitleComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import ColumnNames from "./components/ColumnNames";
import DataTable from "./components/DataTable";
import { apiData } from "./api/api";
import { addToObject } from "./apiFunctions/addToObject";
import "./App.scss";

const App: FunctionComponent = ({}) => {
  const accountApi: string =
    "https://recruitmentdb-508d.restdb.io/rest/accounts";
  const accountApiType: string =
    "https://recruitmentdb-508d.restdb.io/rest/accounttypes";

  const header: HeadersInit = {
    "x-apikey": "5d9f48133cbe87164d4bb12c",
  };
  const urls = [accountApi, accountApiType];

  const [loading, setLoading] = useState<boolean>(false);
  const [accountsData, setAccountsData] = useState<any[]>([]);
  const [accountsTypeData, setAccountsTypeData] = useState<any[]>([]);

  const showData = async () => {
    setLoading(true);

    const [acc, accType] = await Promise.all(
      urls.map((url) =>
        apiData.getData(url, header).catch((e) => console.log(e))
      )
    );
    setAccountsData(acc);
    setAccountsTypeData(accType);
    setLoading(false);
  };

  addToObject(accountsData, accountsTypeData);

  useEffect(() => {
    showData();
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
                accountType={data.accountTypeTitle}
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
