import { useEffect,useState } from "react";
import useHttp from "../hooks/use-http"
import { TRIAGE } from "../utils/routes";
const Triage = (props) => {
    const [triageLevel, setTriageLevel] = useState(null);
     const myHttp = useHttp();
     useEffect(() => {
          const fetchData=async()=>{
             await myHttp.post({
                 url: TRIAGE,
                 body: props.diagnoseBody
             });
         }
         fetchData();
     }, [])
    useEffect(() => {
         if(myHttp.data)
         setTriageLevel(myHttp.data.triage_level);
     }, [myHttp.data])
    return (
        <p>{triageLevel}</p>
    )
}

export default Triage;