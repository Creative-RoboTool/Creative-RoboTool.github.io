import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// import ROBOTOOL_PROMPTS from "./llmPrompts";
import iconAnalyzer from "../imgs/icon_analyzer.png";
import iconCalculator from "../imgs/icon_calculator.png";
import iconCoder from "../imgs/icon_coder.png";
import iconPlanner from "../imgs/icon_planner.png";

import armAnalyzerPrompt from "../texts/arm_prompt_analyzer.txt";
import armPlannerPrompt from "../texts/arm_prompt_planner.txt";
import armCalculatorPrompt from "../texts/arm_prompt_calculator.txt";
import armCoderPrompt from "../texts/arm_prompt_coder.txt";
import robotAnalyzerPrompt from "../texts/legRobot_prompt_analyzer.txt";
import robotPlannerPrompt from "../texts/legRobot_prompt_planner.txt";
import robotCalculatorPrompt from "../texts/legRobot_prompt_calculator.txt";
import robotCoderPrompt from "../texts/legRobot_prompt_coder.txt";

const ROBOTOOL_PROMPTS = {
  arm: {
    analyzer: armAnalyzerPrompt,
    planner: armPlannerPrompt,
    calculator: armCalculatorPrompt,
    coder: armCoderPrompt,
  },
  robot: {
    analyzer: robotAnalyzerPrompt,
    planner: robotPlannerPrompt,
    calculator: robotCalculatorPrompt,
    coder: robotCoderPrompt,
  },
};

function ImageAsButton(src, agentName, setOpen, setAgent) {
  const handleClickOpen = () => {
    setOpen(true);
    setAgent(agentName);
  };

  return (
    <Grid item xs={6} md={3}>
      <Button
        onClick={handleClickOpen}
        sx={{
          //   display: "flex",
          marginLeft: "10%",
          alignItems: "center",
          justifyContent: "left",
          width: "220px",
          overflow: "hidden", // Optional, to make the button round
        }}
      >
        <img
          src={src}
          alt={agentName}
          //   marginLeft="20px"
          width="auto"
          height="60px" // Set the size as per your need
        />
      </Button>
    </Grid>
  );
}

const buttonInfos = [
  { name: "analyzer", src: iconAnalyzer },
  { name: "planner", src: iconPlanner },
  { name: "calculator", src: iconCalculator },
  { name: "coder", src: iconCoder },
];

export default function Prompts() {
  //   function handleButtonPress(demo_name) {
  //     setDisplayDemo(demo_name);
  //   }

  //   let currentDemos = DEMO_CODES[displayDemo];
  const [open, setOpen] = React.useState(false);
  const [env, setEnv] = React.useState("arm");
  const [agent, setAgent] = React.useState("analyzer");
  const [fileContent, setFileContent] = React.useState("");

  React.useEffect(() => {
    // Define the file path here
    const filePath = ROBOTOOL_PROMPTS[env][agent];
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        setFileContent(data);
      });
  }, [env, agent]);

  const handleClose = () => {
    setOpen(false);
  };

  //   const agentCapitalized = agent.charAt(0).toUpperCase() + agent.slice(1);

  return (
    <main>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" marginTop="50px">
          Prompts
        </Typography>
        <Grid container marginTop="10px">
          {buttonInfos.map((item) =>
            ImageAsButton(item["src"], item["name"], setOpen, setAgent)
          )}
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        fullHeight
      >
        <DialogTitle>
          {agent.charAt(0).toUpperCase() + agent.slice(1)} Prompts
        </DialogTitle>

        <Box marginLeft="20px" marginRight="20px" marginBottom="10px">
          <ButtonGroup fullWidth>
            <Button
              onClick={() => setEnv("arm")}
              color="primary"
              variant={env === "arm" ? "contained" : "outlined"}
            >
              Robotic Arm
            </Button>
            <Button
              onClick={() => setEnv("robot")}
              color="primary"
              variant={env === "robot" ? "contained" : "outlined"}
            >
              Quadrupedal Robot
            </Button>
          </ButtonGroup>
        </Box>
        <DialogContent
          sx={{
            height: "70vh",
          }}
        >
          <DialogContentText marginTop="20px">
            <Typography className="prompt" component="pre">
              {fileContent}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
