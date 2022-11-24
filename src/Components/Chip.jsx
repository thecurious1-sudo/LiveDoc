import { Delete } from "@mui/icons-material";
import Classes from "./Chip.module.css";
import { Chip } from "@mui/material";
export default function Chips(props) {
  const handleChipDelete = (ind) => {
    props.onDelete(ind);
  };

  return (
    <>
      <Chip
        sx={{ fontSize: "16px" }}
        label={props.label}
        variant="outlined"
        onDelete={() => handleChipDelete(props.ind)}
      />
    </>
  );
}
