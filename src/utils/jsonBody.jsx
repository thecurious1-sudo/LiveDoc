//URL-https://api.infermedica.com/v3/parse  body-symptom as TEXT and age as VALUE
export const parseBody = (text, value) => {
  return {
    text: text,
    age: {
      value: +value,
    },
  };
};

//returns a empty evidence body with sex,age,and evidence(null) to be filled by diagnoseBody
export const diagnoseBodyInit = (sex="male", value) => {
  return {
    sex: sex,
    age: {
      value: +value,
    },
    evidence: [],
  };
};

export const createEvidenceBody = (evidence, index) => {
  // We are only making body from first element, but mentions contains various elements(remember to use all)
  const data =  evidence.mentions[0];
  const body = { id: data.id, choice_id: data.choice_id };
  if (index !== 0) {
    return body;
  } else {
      body["source"] = "initial";
      return body;
  }
};

export const createEvidences = (evidences, evidenceBody) => {
    evidences.push(evidenceBody);
    return evidences;
};

export const createDiagnoseBody = (diagnoseBody, evidences) => {
    diagnoseBody.evidence = evidences;
    return diagnoseBody;
}