import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { TRIAGE } from "../utils/routes";
import TriageIndicator from "./TriageIndicator/TriageIndicator";
const Triage = (props) => {
  const [triageLevel, setTriageLevel] = useState(null);
  const myHttp = useHttp();
  useEffect(() => {
    const fetchData = async () => {
      await myHttp.post({
        url: TRIAGE,
        body: props.diagnoseBody,
      });
    };
    fetchData();
  }, [props]);
  useEffect(() => {
    console.log(myHttp.data);
    if (myHttp.data) setTriageLevel(myHttp.data.triage_level);
  }, [myHttp.data]);
  if (triageLevel)
    return <TriageIndicator triageLevel={getTriageLevel(triageLevel)} />;
  else return <></>;
};

function getTriageLevel(triage) {
  console.log(triage);
  if (triage === "self_care") return 0;
  else if (triage === "consultation") return 1;
  else if (triage === "consultation_24") return 2;
  else if (triage === "emergency") return 3;
  else if (triage === "emergency_ambulance") return 4;
  else return 5;
}

export default Triage;
