"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function CarsPage() {
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
      {resp?.data ? (
        <Box container sx={{ p: "10px", display: "flex", gap: "20px" }}>
          {resp?.data?.map((row) => (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={row.image}
                title={row.brand}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  porttitor dapibus tortor, vitae faucibus neque vehicula eu.
                  Phasellus a aliquet nisl...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        "Loading"
      )}
    </>
  );
}
