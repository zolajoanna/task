import React, { FunctionComponent, useState, useEffect } from "react";
import TitleComponent from "./components/TitleComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import ColumnNames from "./components/ColumnNames";
import DataTable from "./components/DataTable";
import { apiData } from "./api/api";
import { addToObject } from "./apiFunctions/addToObject";
import "./App.scss";

const App: FunctionComponent = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [accountsData, setAccountsData] = useState<any[]>([]);
  const [accountsTypeData, setAccountsTypeData] = useState<any[]>([]);

  const showData = async () => {
    setLoading(true);
    const acc = await apiData.getDataAccount();
    const accType = await apiData.getDataAccountType();
    setLoading(false);
    setAccountsData(acc);
    setAccountsTypeData(accType);
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
