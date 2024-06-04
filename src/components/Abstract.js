import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";

export default function Abstract() {
  //   function handleButtonPress(demo_name) {
  //     setDisplayDemo(demo_name);
  //   }

  //   let currentDemos = DEMO_CODES[displayDemo];

  const Analyzer = styled("span")({
    color: "green",
    fontWeight: "bold",
  });

  const Planner = styled("span")({
    color: "red",
    fontWeight: "bold",
  });

  const Calculator = styled("span")({
    color: "orange",
    fontWeight: "bold",
  });

  const Coder = styled("span")({
    color: "blue",
    fontWeight: "bold",
  });

  return (
    <main>
      <Container maxWidth="lg">
        <Box marginTop="50px">
          <Typography variant="h4" align="center">
            Abstract
          </Typography>
          <Typography
            marginTop="10px"
            align="justify"
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "1.0em",
              color: "#4a4a4a",
            }}
            // style={{ lineHeight: "1.5" }}
          >
            {/* Tool use is a hallmark of advanced intelligence, exemplified in both
            animal behavior and robotic capabilities. This paper investigates
            the feasibility of imbuing robots with the ability to creatively use
            tools in tasks that involve long-term planning and implicit physical
            constraints. Leveraging Large Language Models (LLMs), we develop a
            system that accepts natural language instructions and outputs
            executable code for controlling robots in both simulated and
            real-world environments. Our framework incorporates four pivotal
            components: (i) an “Analyzer” that interprets natural language to
            discern crucial task-related concepts, (ii) a “Planner” that
            generates comprehensive strategies based on the input and key
            concepts, (iii) a “Calculator” that computes target positions for
            each goal-specific policy, and (iv) a “Coder” that translates these
            plans into executable code. Our results show that LLMs can not only
            comprehend implicit physical constraints and environmental factors
            but also demonstrate innovative tool use. Unlike traditional Task
            and Motion Planning (TAMP) methods that rely on explicit
            optimization and are confined to formal logic, our LLM-based system
            offers a more flexible, efficient, and user-friendly solution for
            complex robotics tasks. Through extensive experimentation, we
            validate that our system is proficient in handling tasks that would
            otherwise be infeasible without the creative use of tools, thereby
            expanding the capabilities of robotic systems. */}
            Creative tool use, a hallmark of intelligence characterized by
            utilizing tools beyond their intended functionality, presents
            significant challenges and opportunities in robotics. This study
            introduces RoboTool, a system developed to enable robots to employ
            creative tool use through the integration of large language models.
            RoboTool accepts natural language instructions and outputs
            executable code for controlling robots. By incorporating a modular
            design inspired by neurology, RoboTool operates in a manner akin to
            the specialized functions of the cerebral cortex. RoboTool
            incorporates four pivotal components: (i) an{" "}
            <Analyzer>Analyzer</Analyzer> that interprets natural language to
            discern key task-related concepts, (ii) a <Planner>Planner</Planner>{" "}
            that generates comprehensive strategies based on the language input
            and key concepts, (iii) a <Calculator>Calculator</Calculator> that
            computes parameters for each skill, and (iv) a <Coder>Coder</Coder>{" "}
            that translates these plans into executable Python code. We propose
            a novel benchmark to evaluate RoboTool across diverse robotic
            configurations, including a robotic arm and a quadrupedal robot. Our
            results show that RoboTool can not only comprehend implicit physical
            constraints and environmental factors but also demonstrate creative
            tool use. Unlike traditional Task and Motion Planning methods that
            rely on explicit optimization and are confined to formal logic, our
            LLM-based system offers a more flexible, efficient, and
            user-friendly solution for complex robotics tasks. Through extensive
            analysis, we validate that RoboTool is proficient in handling tasks
            that would otherwise be infeasible without the creative use of
            tools, thereby expanding the capabilities of robotic systems.
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
