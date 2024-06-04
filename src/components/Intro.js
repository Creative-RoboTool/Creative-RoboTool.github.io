import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Intro() {
  const video_src = process.env.PUBLIC_URL + "/videos/RoboTool_pipeline.mp4";

  return (
    <main>
      <Container maxWidth="lg">
        <Box marginTop="20px">
          <video
            autoplay="1"
            muted="1"
            playsinline="1"
            loop="1"
            preload="metadata"
            width="100%"
          >
            <source src={video_src} type="video/mp4" />
          </video>
        </Box>
      </Container>
    </main>
  );
}
