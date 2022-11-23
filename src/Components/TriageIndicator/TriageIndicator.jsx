import styles from "./TriageIndicator.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Tooltip } from "@mui/material";
const triageLeftPos = ["8.5%", "26.5%", "46.5%", "68.5%", "87.5%", "100%"];
export default function TriageIndicator(props) {
  let pointerPosition = triageLeftPos[props.triageLevel];
  return (
    <div className={styles.container}>
      <span className={styles.heading} style={{ left: `${pointerPosition}` }}>
        Condition Severeity
      </span>
      <div className={styles.pointer} style={{ left: `${pointerPosition}` }}>
        <ArrowDownwardIcon />
      </div>
      <div className={styles.scale}>
        <Tooltip title="Self Care" arrow placement="bottom">
          <div className={styles.class1}></div>
        </Tooltip>
        <Tooltip title="Consultation" arrow placement="bottom">
          <div className={styles.class2}></div>
        </Tooltip>
        <Tooltip title="Consultation in 24 hours" arrow placement="bottom">
          <div className={styles.class3}></div>
        </Tooltip>
        <Tooltip title="Emergency" arrow placement="bottom">
          <div className={styles.class4}></div>
        </Tooltip>
        <Tooltip title="Emergency Ambulance" arrow placement="bottom">
          <div className={styles.class5}></div>
        </Tooltip>
      </div>
    </div>
    // </div>
  );
}
