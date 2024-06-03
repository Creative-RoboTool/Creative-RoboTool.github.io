import React from "react";
import Typography from "@mui/material/Typography";

// Define your component
function PythonCodeHighlighter({ code }) {
  const classes = {
    normal: "code-normal",
    function: "code-function",
    comment: "code-comment",
  };

  // Define your regex patterns
  const patterns = [
    // {
    //   regex:
    //     /\b(def|return|if|else|elif|for|while|import|from|as|class|try|except|finally|with|yield|lambda|print|input|open|range|len|int|float|str|list|dict|set|tuple|bool|True|False|None)\b/g,
    //   className: classes.keyword,
    // },
    { regex: /\b\w{7,}(?=\()/g, className: classes.function },
    { regex: /#.*\n/g, className: classes.comment },
    // { regex: /(['"])(?:(?=(\\?))\2.)*?\1/g, className: classes.string },
  ];

  // Split the code into parts and style them
  let parts = [{ text: code, className: classes.normal }];
  patterns.forEach((pattern) => {
    const newParts = [];
    parts.forEach((part) => {
      if (part.className === classes.normal) {
        const matches = part.text.split(pattern.regex);
        const matchedParts = part.text.match(pattern.regex);
        matches.forEach((match, index) => {
          newParts.push({ text: match, className: classes.normal });
          if (matchedParts && index < matchedParts.length) {
            newParts.push({
              text: matchedParts[index],
              className: pattern.className,
            });
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return (
    <Typography
      component="pre"
      variant="body2"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {parts.map((part, index) => (
        <span key={index} className={part.className}>
          {part.text}
        </span>
      ))}
    </Typography>
  );
}

// Define the main component
// function pythonCode() {
//   const code = `
// def hello_world():
//     print("Hello, world!")
//   `;

//   return <PythonCodeHighlighter code={code} />;
// }

export default PythonCodeHighlighter;
