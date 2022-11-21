import { Delete } from "@mui/icons-material";
import Classes from "./Chip.module.css";
export default function Chips(props) {
  const handleChipDelete = (ind) => {
    props.onDelete(ind);
  };

  return (
    <div className={Classes.chipSet}>
      <p>{props.label}</p>
      <div
        className={Classes.delete}
        onClick={() => handleChipDelete(props.ind)}
      >
        <Delete />
      </div>
    </div>
  );
}
