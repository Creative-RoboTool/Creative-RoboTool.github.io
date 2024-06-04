// const fs = require("fs");

// const filePath = "example.txt"; // Replace with your file path
import armHammerCode from "../texts/arm_code_hammer.txt";
import armMagnetCode from "../texts/arm_code_magnet.txt";
import armScrollCode from "../texts/arm_code_scroll.txt";
import robotBoxCode from "../texts/legRobot_code_box.txt";
import robotSurfboardCode from "../texts/legRobot_code_surfboard.txt";
import robotVaseCode from "../texts/legRobot_code_vase.txt";

import armHammerDes from "../texts/arm_description_hammer.txt";
import armMagnetDes from "../texts/arm_description_magnet.txt";
import armScrollDes from "../texts/arm_description_scroll.txt";
import robotBoxDes from "../texts/legRobot_description_box.txt";
import robotSurfboardDes from "../texts/legRobot_description_surfboard.txt";
import robotVaseDes from "../texts/legRobot_description_vase.txt";

// import robotBox from "./texts/"

const legRobot_box = {
  // video_id: "zfgXBz9fKQw",
  // video_url: "https://www.youtube.com/embed/zfgXBz9fKQw?si=_om_rfowxPxYfrt-",
  video_path: "/videos/legrobot_box.mp4",
  file_path: robotBoxCode,
  description: robotBoxDes,
  task_name: "Climbe-Sofa",
};

const legRobot_surfboard = {
  // video_id: "Nr8eee4UN5U",
  // video_url: "https://www.youtube.com/embed/Nr8eee4UN5U?si=HVm8_DEbpOjk4lbA",
  video_path: "/videos/legrobot_gap.mp4",
  file_path: robotSurfboardCode,
  description: robotSurfboardDes,
  task_name: "Traverse-Sofa",
};

const legRobot_vase = {
  // video_id: "vOn5N2d7VY8",
  // video_url: "https://www.youtube.com/embed/vOn5N2d7VY8?si=IxRPxkHh7exL8c5V",
  video_path: "/videos/legrobot_vase.mp4",
  file_path: robotVaseCode,
  description: robotVaseDes,
  task_name: "Vase-Push",
};

const arm_scroll = {
  // video_id: "br0Uxuernds",
  // video_url: "https://www.youtube.com/embed/br0Uxuernds?si=YhBwoQs8_A22LcH3",
  video_path: "/videos/arm_scroll.mp4",
  file_path: armScrollCode,
  description: armScrollDes,
  task_name: "Grasp-Can",
};

const arm_hammer = {
  // video_id: "xZlQ6MsZr0Q",
  // video_url: "https://www.youtube.com/embed/xZlQ6MsZr0Q?si=VMJ3oHoUSTacFbUM",
  video_path: "/videos/arm_hammer.mp4",
  file_path: armHammerCode,
  description: armHammerDes,
  task_name: "Reach-Milk",
};

const arm_magnet = {
  // video_id: "dvhtE0OKLbc",
  // video_url: "https://www.youtube.com/embed/dvhtE0OKLbc?si=ASg3CZNaSvCGjDnr",
  video_path: "/videos/arm_magnet.mp4",
  file_path: armMagnetCode,
  description: armMagnetDes,
  task_name: "Press-Button",
};

const DEMO_CODES = {
  //   legRobot_box: legRobot_box,
  //   legRobot_surfboard: legRobot_surfboard,
  //   legRobot_chair: legRobot_chair,
  sequential: [arm_scroll, legRobot_vase],
  selection: [arm_hammer, legRobot_surfboard],
  manufacture: [arm_magnet, legRobot_box],
};

export default DEMO_CODES;
