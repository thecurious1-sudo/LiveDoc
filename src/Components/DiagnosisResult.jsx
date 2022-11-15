import React from "react";

const DiagnosisResult = ({ data }) => {
  return <div>{JSON.stringify(data.conditions)}</div>;
};

export default DiagnosisResult;
