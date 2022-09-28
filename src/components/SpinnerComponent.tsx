import React, { FunctionComponent } from "react";
import spinner from "../assets/spinner.gif";

const SpinnerComponent: FunctionComponent = ({}) => {
  return (
    <div className="spinner" data-testid="spinner">
      <img src={spinner} alt="Spinner gif" className="spinner__gif" />
    </div>
  );
};

export default SpinnerComponent;
