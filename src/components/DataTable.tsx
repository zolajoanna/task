import React, { FunctionComponent } from "react";
import { IDataTable } from "../interfaces/Interfaces";

const DataTable: FunctionComponent<IDataTable> = ({
  name,
  currency,
  prof,
  accountType,
  id,
}) => {
  return (
    <div className="data" key={id}>
      <div className="data__name" data-testid="accountName">
        {name}
      </div>
      <div className="data__profit">
        {currency} {prof}
      </div>
      <div className="data__account">{accountType}</div>
    </div>
  );
};
export default DataTable;
