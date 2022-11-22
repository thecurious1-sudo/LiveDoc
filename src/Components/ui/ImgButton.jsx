import { Button } from "@mui/material";

export default function ImgButton(props) {
  return (
    <>
      <Button
        // disabled={props.disabled}
        style={{ width: "fit-content" }}
        type="submit"
        variant="contained"
        endIcon={props.icon}
      >
        Diagnose
      </Button>
    </>
  );
}
