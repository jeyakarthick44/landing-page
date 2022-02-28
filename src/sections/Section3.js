import React from "react";
import { Box, Center, Container, Text } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import awesome from "../components/awesome.jpg";
const Section3 = () => {
  return (
    <div className="section3">
      <div className="wrapper">
        <div className="zone">
          <DragHandleIcon />
          <h3>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them.
          </h3>
          <h6>Judith Black</h6>
          <h6>CEO at PureInsights</h6>
        </div>
        <img className="image" src={awesome} />
      </div>
    </div>
  );
};

export default Section3;
