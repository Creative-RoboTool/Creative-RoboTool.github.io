import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Description } from "@mui/icons-material";
// import Link from "@mui/material/Link";x
// import { createTheme, ThemeProvider } from "@mui/material/styles";

function DemoBlock(demo) {
  return (
    <Grid item xs={4} md={4} justifyContent="center">
      <Box>
        <video
          key={demo["videoSrc"]}
          width="100%"
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
        >
          <source src={demo["videoSrc"]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box>
        <Typography variant="body2" color="grey">
          {demo["description"]}
        </Typography>
      </Box>
    </Grid>
  );
}

export default function Failures() {
  const allDemos = [
    {
      expName: "Reach-Milk",
      errorType: "Tool-use Error",
      description:
        "Tried to use the pineapple toy as a tool to reach the milk.",
      videoSrc: "/videos/arm_hammer_wrongTool.mp4",
    },
    {
      expName: "Grasp-Can",
      errorType: "Logical Error",
      description: "Moved the strip of paper before using the stick.",
      videoSrc: "/videos/arm_scroll_firstPaperThenStick.mp4",
    },
    {
      expName: "Press-Button",
      errorType: "Logical Error",
      description: "Released the magnetic cubes after assembling them.",
      videoSrc: "/videos/arm_magnet_earlyRelease.mp4",
    },
    {
      expName: "Traverse-Sofa",
      errorType: "Logical Error",
      description:
        "Tried to push the surfboard to the center of the other sofa.",
      videoSrc: "/videos/legrobot_gap_pushToSofa2Center.mp4",
    },
    {
      expName: "Push-Vase",
      errorType: "NumericalError",
      description:
        "Push the cushion to a position too far from the glass vase.",
      videoSrc: "/videos/legrobot_vase_pushCushionToFar.mp4",
    },
    {
      expName: "CLimb-Sofa",
      errorType: "Tool-use Error",
      description: "Tried to climb onto the sofa without using boxes.",
      videoSrc: "/videos/legrobot_box_noTool.mp4",
    },
  ];
  return (
    <main>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          marginTop="50px"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Failure Cases
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        <Grid
          container
          justifyContent="space-evenly"
          spacing={4}
          marginTop="-20px"
        >
          {allDemos.map((demo) => DemoBlock(demo))}
        </Grid>
      </Container>
    </main>
  );
}
