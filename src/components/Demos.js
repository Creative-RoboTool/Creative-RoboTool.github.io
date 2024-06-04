import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Link from "@mui/material/Link";x
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import DEMO_CODES from "../js/llmCodes";
import PythonCodeHighlighter from "../js/pythonCodeFormater";

function DemoBlock(demo, displayDemo, setOpen, setDesFileName) {
  // get demo name from the args
  //   const demo_name = args["demo_name"];
  //   const demo_dict = DEMO_CODES[demo_name];
  // const video_id = demo["video_id"];
  // const demo_video_url =
  //   "https://www.youtube.com/embed/" +
  //   video_id +
  //   "?autoplay=1&loop=1&mute=1&controls=0&playlist=" +
  //   video_id;
  // const demo_code = demo["code"];
  // const demo_video_path = process.env.PUBLIC_URL + demo["video_path"];
  const demo_video_path = demo["video_path"];
  const demo_file = demo["file_path"];
  const demo_name = demo["task_name"];
  const demo_des_file = demo["description"];

  const [videoSrc, setVideoSrc] = React.useState("/videos/arm_hammer.mp4");
  const [fileContent, setFileContent] = React.useState("");

  React.useEffect(() => {
    if (demo_file) {
      const filePath = demo_file;
      fetch(filePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok ${response.statusText}`
            );
          }
          return response.text();
        })
        .then((data) => {
          setFileContent(data);
        })
        .catch((error) => {
          console.error("Error fetching the file:", error);
        });
    }

    if (demo_video_path) {
      setVideoSrc(process.env.PUBLIC_URL + demo_video_path);
    }
  }, [demo_file, displayDemo]);

  return (
    <Grid
      container
      xs={12}
      spacing={2}
      justifyContent="space-evenly"
      marginTop="10px"
    >
      <Grid item xs={12}>
        <Typography variant="h6">
          {demo_name}
          {"   ["}
          <Typography
            variant="h6"
            onClick={() => {
              setOpen(true);
              setDesFileName(demo_des_file);
            }}
            sx={{ textDecoration: "underline" }}
            display="inline"
            color="primary"
          >
            description
          </Typography>
          {"]"}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="center">
        <Grid item container xs={12} justifyContent="center">
          <Box>
            <video
              key={videoSrc}
              width="100%"
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="center">
        <Box
          fullWidth
          sx={{
            // width: "410px",
            height: "420px",
            overflowY: "auto",
            backgroundColor: "rgba(0,0,0,0.04)", // You can choose your own color
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            //   width: "150px",
            //   overflowWrap: "break-word",
            //   textOverflow: "ellipsis",
            //   overflowX: "auto",
          }}
        >
          {/* <Typography
            variant="body2"
            component="pre"
            fullWidth
            // nowrap
            sx={{
              // maxWidth: 200,
              // overflowWrap: "break-word",
              fontFamily: "Monospace",
              // fontSize: ""
            }}
          >
            {fileContent}
          </Typography> */}
          <PythonCodeHighlighter code={fileContent} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default function Demo() {
  const [displayDemo, setDisplayDemo] = React.useState("selection");

  function handleButtonPress(demo_name) {
    setDisplayDemo(demo_name);
  }

  let currentDemos = DEMO_CODES[displayDemo];

  const [open, setOpen] = React.useState(false);
  const [fileContent, setFileContent] = React.useState("");
  const [desFile, setDesFileName] = React.useState("");

  React.useEffect(() => {
    // Define the file path here
    const filePath = desFile;
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        setFileContent(data);
      });
  }, [desFile]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      {/* Hero unit */}
      <Container maxWidth="lg">
        {/* Display creative tool use with robotic arm */}
        {/* <Grid container> */}
        {/* <ButtonGroup
          fullWidth
          variant="outlined"
          aria-label="outlined primary button group"
        > */}
        <Grid
          container
          spacing={2}
          marginTop="50px"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Experiment Videos and Generated Code
            </Typography>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "selection" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("selection")}
            >
              Tool Selection
            </Button>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "sequential" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("sequential")}
            >
              Sequential Tool Use
            </Button>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "manufacture" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("manufacture")}
            >
              Tool Manufacturing
            </Button>
          </Grid>
        </Grid>
        {/* <Button onClick={() => handleButtonPress("legRobot_surfboard")}>
          Creative Use
        </Button>
        <Button onClick={() => handleButtonPress("legRobot_chair")}>
          Tool Manufacture
        </Button> */}
        {/* </ButtonGroup> */}
        {/* </Grid> */}
      </Container>

      <Container maxWidth="lg">
        {currentDemos.map((demo) =>
          DemoBlock(demo, displayDemo, setOpen, setDesFileName)
        )}
        {/* <DemoBlock demo_name={displayDemo} /> */}
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        fullHeight
      >
        <DialogTitle>Task Description</DialogTitle>

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
