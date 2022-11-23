import { Button } from "@mui/material";
import { useEffect } from "react";

export default function ImgButton(props) {
  useEffect(() => {
    const button = document.getElementById("diagnose-button");
    if (props.disabled) {
      button.setAttribute("disabled", "");
      console.log("disabled");
    } else {
      button.removeAttribute("disabled");
      console.log("Enabled");
    }
  }, [props.disabled]);

  return (
    <>
      <Button
        style={{ width: "fit-content" }}
        type="submit"
        variant="contained"
        endIcon={props.icon}
        id="diagnose-button"
      >
        Diagnose
      </Button>
    </>
  );
}
