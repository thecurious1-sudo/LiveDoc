import styles from "./Home.module.css";
import useHttp from "../hooks/use-http";
import { DIAGNOSE, SYMPTOM_DETAILS } from "../utils/routes";
import { useEffect } from "react";
import {
  createEvidenceBody,
  diagnoseBodyInit,
  parseBody,
  createEvidences,
  createDiagnoseBody,
} from "../utils/jsonBody";
import { useRef } from "react";
const Main = () => {
  let evidences = [];
  const myHttp = useHttp();
  const myHttp2 = useHttp();
  const symptomRef = useRef();
  const ageRef = useRef();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let diagnoseBody = diagnoseBodyInit("male", ageRef.current.value);
    diagnoseBody = createDiagnoseBody(diagnoseBody, evidences);
    await myHttp2.post({
      url: DIAGNOSE,
      body: diagnoseBody,
    });
  };
  const symptomSubmitHandler = async () => {
    let symptomText = symptomRef.current.value;
    let ageText = ageRef.current.value;
    await myHttp.post({
      url: SYMPTOM_DETAILS,
      body: parseBody(symptomText, ageText),
    });
  };
  useEffect(() => {
    if (myHttp.data) {
      let evidenceBody = createEvidenceBody(myHttp.data, 0);
      evidences = createEvidences(evidences, evidenceBody);
      console.log(evidences);
    }
  }, [myHttp.data]);
  useEffect(() => {
    if (myHttp2.data) {
      console.log(myHttp2.data);
    }
  }, [myHttp2.data]);
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        Enter age
        <input type="number" ref={ageRef} />
        <br></br>
        <span> Enter symptom</span>
        <input type="text" ref={symptomRef} />
        <button type="button" onClick={symptomSubmitHandler}>
          Submit
        </button>
        <br></br>
        <button type="submit">Diagnose</button>
      </form>
    </>
  );
};
export default Main;
