import React from "react";

const Symptoms = ({data}) => {
  return <div>{data}</div>;
};

export default Symptoms;

export const rearrangeEvidences = (evidences) => {
  let rearrangedData = [];
  for (let evidence of evidences) {
    const entry = {
      Symptom: evidence.mentions.orth,
      CommonName: evidence.mentions.common_name,
    };
    rearrangedData.push(entry);
  }

  return rearrangedData;
};
