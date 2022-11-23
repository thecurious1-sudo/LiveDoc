import { Button } from "@mui/material";

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
