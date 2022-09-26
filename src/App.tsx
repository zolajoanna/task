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

  const urls = [accountApi, accountApiType];

  const fetchData = async () => {
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

  const addToObject = () => {
    accountsData.filter(function (obj) {
      return accountsTypeData.some(function (obj2) {
        if (obj.accountType === obj2.id) {
          Object.assign(obj, { accountTypeTitle: obj2.title });
          console.log(obj);
        }
      });
    });
  };

  addToObject();
  useEffect(() => {
    fetchData();
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
