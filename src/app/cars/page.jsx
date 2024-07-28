"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  const [resp, setResp] = React.useState({});

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/cars");
    if (!response.ok) {
      throw new Error(`Response error: ${response.status}`);
    }

    const json = await response.json();
    setResp(json);
  };

  return (
    <>
      <Typography component="h5" variant={"h5"}>
        Cars
      </Typography>
      <br />
      {resp.data ? (
        <Paper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell align="right">Manufacturer</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resp.data.map((row) => (
                  <TableRow
                    key={row.brand}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.brand}
                    </TableCell>
                    <TableCell align="right">{row.manufacturer}</TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(row.price)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        "Loading..."
      )}
    </>
  );
}
