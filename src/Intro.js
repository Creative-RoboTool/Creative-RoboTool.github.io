import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import DEMO_CODES from "./llmCodes";
import pipelineImage from "./imgs/pipeline.png";

export default function Intro() {
  //   function handleButtonPress(demo_name) {
  //     setDisplayDemo(demo_name);
  //   }

  //   let currentDemos = DEMO_CODES[displayDemo];

  return (
    <main>
      <Container maxWidth="lg">
        <Box marginTop="20px">
          <img
            src={pipelineImage}
            // alt="Random"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </main>
  );
}
