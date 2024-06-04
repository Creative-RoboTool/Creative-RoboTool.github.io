import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { styled } from "@mui/system";

import filePath from "../texts/bibtex.txt";

export default function BibTex() {
  const [fileContent, setFileContent] = React.useState("");

  React.useEffect(() => {
    // Define the file path here
    // const filePath = ROBOTOOL_PROMPTS[env][agent];
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        setFileContent(data);
      });
  }, []);

  return (
    <main>
      <Container maxWidth="md">
        <Box marginTop="50px">
          <Typography variant="h4" align="center">
            BibTex
          </Typography>
          <Typography
            // sx={{ background: "lightGrey" }}
            marginTop="10px"
            align="justify"
            component="pre"
            sx={{
              fontFamily: "sans-serif",
              //   fontWeight: 400,
              fontSize: "1.0em",
              color: "grey",
            }}
            // style={{ lineHeight: "1.5" }}
          >
            {fileContent}
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
