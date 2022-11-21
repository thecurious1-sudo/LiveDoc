import useHttp from "../hooks/use-http";
import { DIAGNOSE, SYMPTOM_DETAILS } from "../utils/routes";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { CircularProgress } from "@mui/material";
import styles from "../Home/Home.module.css";
import {
  createEvidenceBody,
  diagnoseBodyInit,
  parseBody,
  createEvidences,
  createDiagnoseBody,
} from "../utils/jsonBody";
import DiagonosisResults from "../Components/DiagonosisResults";
import Triage from "../Components/Triage";
let diagnoseBody = null;
let evidences = [];
const Home = () => {
  console.log(evidences);
  const myHttp = useHttp();
  const myHttp2 = useHttp();
  const [age, setAge] = useState(null);
  const [sex, setSex] = React.useState("male");
  const [loading, setLoading] = useState(false);
  const [diagnosisData, setDiagnosisData] = useState([]);
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
      <div className={styles.container}>
        {!loading && (
          <form className={styles.myForm123} onSubmit={formSubmitHandler}>
            <FormSelectField sex={sex} setSex={setSex} />
            <FormTextField label="Age" onChangeHandler={changeAgeHandler} />
            <div>
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
            </div>
            {/* <button type="submit">Diagnose</button> */}
            <ImgButton disabled={evidences.length === 0} />
          </form>
        )}
        {diagnoseBody && <Triage diagnoseBody={diagnoseBody}></Triage>}
        {myHttp2.data && myHttp2.data.conditions.length > 0 && (
          <DiagonosisResults data={myHttp2.data.conditions} />
        )}
      </div>
    </>
  );
};
export default Home;

const currencies = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

function FormSelectField(props) {
  const { sex, setSex } = props;
  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Sex"
          value={sex}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
function FormTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-helperText"
        label={props.label}
        onChange={props.onChangeHandler}
      />
    </Box>
  );
}

function ImgButton(props) {
  return (
    <>
      <Button
        // disabled={props.disabled}
        style={{ width: "fit-content" }}
        type="submit"
        variant="contained"
        endIcon={<MonitorHeartIcon />}
      >
        Diagnose
      </Button>
    </>
  );
}
