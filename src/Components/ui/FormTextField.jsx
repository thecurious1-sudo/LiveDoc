import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function FormTextField(props) {
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
        type={props.type}
        error={props.error}
        helperText={props.error && props.helperText}
        id="outlined-helperText"
        label={props.label}
        onChange={props.onChangeHandler}
        value={props.value || ""}
      />
    </Box>
  );
}
