import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import roboToolIcon from "../imgs/icon_RoboTool.png";

export default function Title() {
  return (
    <main>
      <Box
        sx={{
          // bgcolor: blueGrey[50],
          // bgImage: { bgImage },
          pt: 8,
          pb: 2,
        }}
        className="background"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundSize: "cover", // Cover the viewport
        //   backgroundPosition: "center", // Center the image
        //   height: "300px",
        //   filter: "blur(8px)",
        // }}
      >
        <Container maxWidth="lg">
          <Box marginTop="00px" marginBottom="20px" align="center">
            <img
              src={roboToolIcon}
              // alt="Random"
              style={{
                width: "50%",
                height: "auto",
                minWidth: "300px",
                maxWidth: "500px",
              }}
            />
          </Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "white", fontWeight: "bold" }}
            paragraph
          >
            Creative Robot Tool Use with Large Models
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "white" }}
            // style={{ fontWeight: "bold" }}
            paragraph
          >
            <Link sx={{ color: "white" }} href="https://mxu34.github.io/">
              Mengdi Xu
            </Link>
            <sup>1†</sup>,&nbsp;
            <Link sx={{ color: "white" }} href="https://peidehuang.github.io/">
              Peide Huang
            </Link>
            <sup>1†</sup>,&nbsp;
            <Link
              sx={{ color: "white" }}
              href="https://www.google.com/url?q=https%3A%2F%2Fwenhaoyu.weebly.com%2F&sa=D&sntz=1&usg=AOvVaw39ABijfkPI4EwSHDPkBsov"
            >
              Wenhao Yu
            </Link>
            <sup>2†</sup>,&nbsp;
            <Link sx={{ color: "white" }} href="">
              Shiqi Liu
            </Link>
            <sup>1</sup>,&nbsp;
            <Link
              sx={{ color: "white" }}
              href="https://xilunzhangrobo.github.io/"
            >
              Xilun Zhang
            </Link>
            <sup>1</sup>,&nbsp;
            <Link sx={{ color: "white" }} href="https://yaruniu.com/">
              Yaru Niu
            </Link>
            <sup>1</sup>,&nbsp;
            <Link
              sx={{ color: "white" }}
              href="https://research.google/people/tingnan-zhang/"
            >
              Tingnan Zhang
            </Link>
            <sup>2</sup>,&nbsp;
            <Link sx={{ color: "white" }} href="https://fxia22.github.io/">
              Fei Xia
            </Link>
            <sup>2</sup>,&nbsp;
            <Link sx={{ color: "white" }} href="https://www.jie-tan.net/">
              Jie Tan
            </Link>
            <sup>2</sup>,&nbsp;
            <Link
              sx={{ color: "white" }}
              href="https://www.meche.engineering.cmu.edu/directory/bios/zhao-ding.html"
            >
              Ding Zhao
            </Link>
            <sup>1</sup>
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "white", marginTop: "-10px" }}
            // style={{ fontWeight: "bold" }}
            paragraph
          >
            <sup>1</sup>Carnegie Mellon University, <sup>2</sup>Google DeepMind
          </Typography>

          <Typography
            variant="subtitle2"
            align="center"
            sx={{ color: "white", marginTop: "-10px" }}
            // style={{ fontWeight: "bold" }}
            paragraph
          >
            <sup>†</sup>These authors contributed equally to this work
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
