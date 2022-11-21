import useHttp from "../hooks/use-http";
import { DIAGNOSE, SYMPTOM_DETAILS } from "../utils/routes";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
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
import Chip from "../Components/Chip";
let diagnoseBody = null;
let evidences = [];
const Home = () => {
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
    evidences = [];
    setInputs([]);
    setChips([]);
  };

  // Fetches the symptom id corresponding to added symptom
  const symptomSubmitHandler = async () => {
    setLoading(true);
    console.log(inputs);
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
        evidences = createEvidences(evidences, evidenceBody);
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
      <div className={styles.container}>
        {!loading && (
          <form className={styles.myForm123} onSubmit={formSubmitHandler}>
            <div className={styles["age-sex"]}>
              <FormSelectField sex={sex} setSex={setSex} />
              <FormTextField
                label="Age"
                onChangeHandler={changeAgeHandler}
                value={age}
              />
            </div>
            <div>
              <span> Enter symptom</span>
              <input type="text" id="symptoms" ref={inputRef} />
              {chips}
              <button type="button" onClick={addSymptomFieldHandler}>
                Add Symptom
              </button>
              <button type="button" onClick={symptomSubmitHandler}>
                Submit
              </button>
            </div>
            {/* <button type="submit">Diagnose</button> */}
            <ImgButton disabled={evidences.length === 0} />
          </form>
        )}
        {myHttp2.data && diagnoseBody && (
          <Triage diagnoseBody={diagnoseBody}></Triage>
        )}
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
