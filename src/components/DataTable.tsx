import React, { FunctionComponent } from "react";
import { IDataTable } from "../interfaces/Interfaces";

const DataTable: FunctionComponent<IDataTable> = ({ name, currency, prof }) => {
  return (
    <div className="data">
      <div className="data__name">{name}</div>
      <div className="data__profit">
        {currency} {prof}
      </div>
      <div className="data__account">{name}</div>
    </div>
  );
};
export default DataTable;
