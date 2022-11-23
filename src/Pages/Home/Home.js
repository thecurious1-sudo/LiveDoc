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
import { Skeleton } from "@mui/material";
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
  const [disabled, setDisabled] = useState(true);
  const [symptom, setSymptom] = useState("");
  const clearFormHandler = (e) => {
    setAge(null);
    setSex("male");
    setEvidences([]);
    setInputs([]);
    setChips([]);
    setDisabled(true);
    myHttp.setNull();
    myHttp2.setNull();
    window.scrollTo(0, 0);
  };
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
    // setEvidences([]);
    // setInputs([]);
    // setChips([]);
    // setDisabled(true);
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
    const value = symptom;
    if (value.length > 0) {
      const ind = +chips.length;
      const chip = (
        <Chip
          onDelete={removeSymptomHandler}
          label={value}
          ind={+ind}
          key={ind}
        />
      );
      setChips([...chips, chip]);
      setInputs([...inputs, value]);
    }
    setSymptom("");
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
        console.log("in here");
        let evidenceBody = createEvidenceBody(myHttp.data, 0);
        setEvidences(createEvidences(evidences, evidenceBody));
        setDisabled(false);
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

  // Sets Symptom
  const setSymptomHandler = (e) => {
    setSymptom(e.target.value);
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
            <div className={styles["symptom-container"]}>
              <div className={styles["symptom-input-button"]}>
                <FormTextField
                  onChangeHandler={setSymptomHandler}
                  label="Enter Symptom"
                  value={symptom}
                />
                <Button
                  sx={{ height: "10%", "margin-top": "6%" }}
                  variant="outlined"
                  onClick={addSymptomFieldHandler}
                >
                  +
                </Button>
              </div>
              <div className={styles["chip-Container"]}>{chips}</div>
              <Button
                sx={{ "margin-top": "2%" }}
                variant="outlined"
                onClick={symptomSubmitHandler}
                size="small"
              >
                Submit
              </Button>
            </div>
            <div className={styles["form-buttons"]}>
              <ImgButton disabled={disabled} icon={<MonitorHeartIcon />} />
              <Button onClick={clearFormHandler} variant="contained">
                Reset
              </Button>
            </div>
          </form>
        </div>
        {myHttp2.loading && !myHttp2.data && (
          <div className={styles.output}>
            <Skeleton variant="rounded" width={330} height={100} />
          </div>
        )}
        {!myHttp2.loading && myHttp2.data && (
          <div className={styles.output}>
            {myHttp2.data && diagnoseBody && (
              <Triage diagnoseBody={diagnoseBody}></Triage>
            )}
            {myHttp2.data && myHttp2.data.conditions.length > 0 && (
              <DiagonosisResults data={myHttp2.data.conditions} />
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
