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
import DiagnosisResult from "../Components/DiagnosisResult";

let evidences = [];
const Home = () => {
  const myHttp = useHttp();
  const myHttp2 = useHttp();
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diagnosisData, setDiagnosisData] = useState([]);
  // Submits the form to get questions and conditions
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let diagnoseBody = diagnoseBodyInit("male", age);
    diagnoseBody = createDiagnoseBody(diagnoseBody, evidences);
    console.log(diagnoseBody);
    await myHttp2.post({
      url: DIAGNOSE,
      body: diagnoseBody,
    });
    evidences = [];
  };

  // Fetches the symptom id corresponding to added symptom
  const symptomSubmitHandler = async () => {
    const inputs = document.querySelectorAll("#symptoms");
    setLoading(true);
    for (let input of inputs) {
      let symptomText = input.value;
      if (symptomText.length > 0) {
        await myHttp.post({
          url: SYMPTOM_DETAILS,
          body: parseBody(symptomText, age),
        });
      }
    }
    setLoading(false);
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
    if (inputs.length > 1) {
      setInputs((prevState) => {
        let newData = prevState.slice();
        newData.splice(-1);
        return newData;
      });
    }
  };

  // Creates the evidences array for diagnosis request
  useEffect(() => {
    if (myHttp.data) {
      if (myHttp.data.obvious) {
        let evidenceBody = createEvidenceBody(myHttp.data, 0);
        evidences = createEvidences(evidences, evidenceBody);
      }
    }
  }, [myHttp.data]);

  // Prints data after diagnosis request is over
  useEffect(() => {
    if (myHttp2.data) {
      console.log(myHttp2.data);
      setDiagnosisData(myHttp2.data);
    }
  }, [myHttp2.data]);

  // Handler to set age
  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      {!loading && (
        <form onSubmit={formSubmitHandler}>
          Enter age
          <input type="number" onChange={changeAgeHandler} />
          <br></br>
          <span> Enter symptom</span>
          {inputs}
          <button type="button" onClick={symptomSubmitHandler}>
            Submit
          </button>
          <button type="button" onClick={addSymptomFieldHandler}>
            Add Symptom
          </button>
          <button type="button" onClick={removeSymptomHandler}>
            Remove Symptom
          </button>
          <br></br>
          <button type="submit">Diagnose</button>
        </form>
      )}
      {!myHttp2.loading && <DiagnosisResult data={diagnosisData} />}
    </>
  );
};
export default Home;
