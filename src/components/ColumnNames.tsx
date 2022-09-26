import React, { FunctionComponent } from "react";

const ColumnNames: FunctionComponent = ({}) => {
  return (
    <div className="data data__title">
      <div className="data__name">Name</div>
      <div className="data__profit">Profit & Loss</div>
      <div className="data__account">Account Type</div>
    </div>
  );
};

export default ColumnNames;
