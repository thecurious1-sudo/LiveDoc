import { Button } from "@mui/material";
import { useEffect } from "react";

export default function ImgButton(props) {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        endIcon={props.icon}
        disabled={props.disabled}
      >
        Diagnose
      </Button>
    </>
  );
}
