import useHttp from "../../hooks/use-http";
import { DIAGNOSE, SYMPTOM_DETAILS } from "../../utils/routes";
import { useEffect, useState } from "react";
import * as React from "react";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import styles from "./Home.module.css";
import ImgButton from "../../Components/ui/ImgButton";
import { FormTextField } from "../../Components/ui/FormTextField";
import FormSelectField from "../../Components/ui/FormSelectField";
import { Button } from "@mui/material";
import {
  createEvidenceBody,
  diagnoseBodyInit,
  parseBody,
  createEvidences,
  createDiagnoseBody,
} from "../../utils/jsonBody";
import DiagonosisResults from "../../Components/DiagonosisResults";
import Triage from "../../Components/Triage";
import Chip from "../../Components/Chip";
let diagnoseBody = null;
const Home = () => {
  const [evidences, setEvidences] = useState([]);
  const myHttp = useHttp();
  const myHttp2 = useHttp();
  const [age, setAge] = useState(null);
  const [sex, setSex] = React.useState("male");
  const [loading, setLoading] = useState(false);
  const [chips, setChips] = useState([]);
  const [inputs, setInputs] = useState([]);
  const inputRef = React.useRef();
  // Submits the form to get questions and conditions
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    diagnoseBody = diagnoseBodyInit(sex, age);
    diagnoseBody = createDiagnoseBody(diagnoseBody, evidences);
    console.log(diagnoseBody);
    await myHttp2.post({
      url: DIAGNOSE,
      body: diagnoseBody,
    });
    setEvidences([]);
    setInputs([]);
    setChips([]);
  };

  // Fetches the symptom id corresponding to added symptom
  const symptomSubmitHandler = async () => {
    setLoading(true);
    for (let input of inputs) {
      if (input.length > 0) {
        await myHttp.post({
          url: SYMPTOM_DETAILS,
          body: parseBody(input, age),
        });
      }
    }
    setLoading(false);
  };

  // Add/Remove more symptom fields
  const addSymptomFieldHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value.length > 0) {
      const ind = +chips.length;
      const chip = (
        <Chip
          onDelete={removeSymptomHandler}
          label={inputRef.current.value}
          ind={+ind}
          key={ind}
        />
      );
      setChips([...chips, chip]);
      setInputs([...inputs, value]);
    }
    inputRef.current.value = "";
  };
  const removeSymptomHandler = (ind) => {
    if (chips.length >= 0) {
      setInputs((prevState) => {
        let newData = prevState.slice();
        newData.splice(ind, 1);
        return newData;
      });

      setChips((prevState) => {
        let newData = prevState.slice();
        newData.splice(ind, 1);
        return newData;
      });
    }
  };

  // Creates the evidences array for diagnosis request
  useEffect(() => {
    if (myHttp.data) {
      if (myHttp.data.obvious) {
        let evidenceBody = createEvidenceBody(myHttp.data, 0);
        setEvidences(createEvidences(evidences, evidenceBody));
      }
    }
  }, [myHttp.data]);

  // Prints data after diagnosis request is over
  useEffect(() => {
    if (myHttp2.data) {
      console.log(myHttp2.data);
    }
  }, [myHttp2.data]);

  // Handler to set age
  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <form className={styles.inputForm} onSubmit={formSubmitHandler}>
            <div className={styles["age-sex"]}>
              <FormSelectField sex={sex} setSex={setSex} />
              <FormTextField
                label="Age"
                onChangeHandler={changeAgeHandler}
                value={age}
              />
            </div>
            <div>
              <input type="text" id="symptoms" ref={inputRef} />
              {chips}
              <Button
                variant="outlined"
                onClick={addSymptomFieldHandler}
                // sx={{ padding: "0px", width: "20px" }}
              >
                +
              </Button>
              {/* <button type="button" >
                +
              </button> */}
              <button type="button" onClick={symptomSubmitHandler}>
                Submit
              </button>
            </div>
            {/* <button type="submit">Diagnose</button> */}
            <ImgButton
              disabled={evidences.length === 0}
              icon={<MonitorHeartIcon />}
            />
          </form>
        </div>
        {myHttp2.data && myHttp2.data.conditions.length > 0 && (
          <DiagonosisResults data={myHttp2.data.conditions} />
        )}
      </div>

      {myHttp2.data && diagnoseBody && (
        <Triage diagnoseBody={diagnoseBody}></Triage>
      )}
    </>
  );
};
export default Home;