import React from "react";
import { Box, styled } from "@mui/material";
import '../App.css';
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

export default function Editor() {
  const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
  `;

  const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #aaaebc;
    justify-content: space-between;
    font-weight: 700px;
  `;

  return (
    <Box>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 20,
              width: 30,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 9,
              padding: 2,
            }}
          >
            /
          </Box>
          HTML
        </Heading>
        <CloseFullscreenIcon />
      </Header>

      <CodeMirror 
      className="contolled-editor"
      options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true
      }}
      />
    </Box>
  );
}
