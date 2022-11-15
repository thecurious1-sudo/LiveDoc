// import styles from "./Home.module.css";
import useHttp from "../hooks/use-http";
import { DIAGNOSE, SYMPTOM_DETAILS } from "../utils/routes";
import { useEffect, useState } from "react";
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
  const ageRef = useRef();

  // Submits the form to get questions and conditions
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let diagnoseBody = diagnoseBodyInit("male", ageRef.current.value);
    diagnoseBody = createDiagnoseBody(diagnoseBody, evidences);
    await myHttp2.post({
      url: DIAGNOSE,
      body: diagnoseBody,
    });
  };

  // Fetches the symptom id corresponding to added symptom
  const symptomSubmitHandler = async () => {
    const inputs = document.querySelectorAll("#symptoms");
    const ageText = ageRef.current.value;
    for (let input of inputs) {
      let symptomText = input.value;
      await myHttp.post({
        url: SYMPTOM_DETAILS,
        body: parseBody(symptomText, ageText),
      });
    }
  };

  // Add/Remove more symptom fields
  const [inputs, setInputs] = useState([
    <input type="text" key={+0} id="symptoms" />,
  ]);
  const addSymptomFieldHandler = (e) => {
    e.preventDefault();
    const ind = inputs.length;
    const input = <input key={+ind} type="text" id="symptoms" />;
    setInputs([...inputs, input]);
  };
  const removeSymptomHandler = (e) => {
    e.preventDefault();
  };

  // Creates the evidences array for diagnosis request
  useEffect(() => {
    if (myHttp.data) {
      let evidenceBody = createEvidenceBody(myHttp.data, 0);
      evidences = createEvidences(evidences, evidenceBody);
      console.log(evidences);
    }
  }, [myHttp.data]);


  // Prints data after diagnosis request is over
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
        {inputs}
        <button type="button" onClick={symptomSubmitHandler}>
          Submit
        </button>
        <button type="button" onClick={addSymptomFieldHandler}>
          Add Symptom
        </button>
        <br></br>
        <button type="submit">Diagnose</button>
      </form>
    </>
  );
};
export default Main;
