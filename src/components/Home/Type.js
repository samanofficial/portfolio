import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Creative Problem Solver",
          "Technical Expert",
          "Innovative Thinker",
          "Passionate Engineer",
          "Collaborative Team Player",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
