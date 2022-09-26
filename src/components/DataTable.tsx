import React, { FunctionComponent } from "react";
import { IDataTable } from "../interfaces/Interfaces";

const DataTable: FunctionComponent<IDataTable> = ({
  name,
  currency,
  prof,
  id,
}) => {
  return (
    <div className="data" key={id}>
      <div className="data__name">{name}</div>
      <div className="data__profit">
        {currency} {prof}
      </div>
      <div className="data__account">{name}</div>
    </div>
  );
};
export default DataTable;
