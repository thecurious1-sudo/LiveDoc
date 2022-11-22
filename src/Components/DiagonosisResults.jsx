import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
function Row(props) {
  let myDisease = props.row.commonName.trim().replaceAll(" ", "-");
  let myUrl = `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${myDisease}&df=info_link_data`;
  const myHttp = useHttp();
  useEffect(() => {
    const fetchData = async () => {
      await myHttp.get({
        url: myUrl,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(myHttp.data);
  }, [myHttp.data]);
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.commonName}
        </TableCell>
        <TableCell align="right">{row.probability}</TableCell>
        {myHttp.data && myHttp.data[3] && myHttp.data[3][0] && (
          <TableCell align="right">
            <a target="blank" href={`${myHttp.data[3][0][0].split(",")[0]}`}>
              Know More
            </a>
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function DiagonosisResults(props) {
  const { data } = props;
  const rowss = data.map((eachDisease) => ({
    commonName: eachDisease.common_name,
    probability: eachDisease.probability,
  }));
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Disease/Common Name</TableCell>
              <TableCell align="right">Probability</TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowss &&
              rowss.map((row) => <Row key={row.commonName} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
