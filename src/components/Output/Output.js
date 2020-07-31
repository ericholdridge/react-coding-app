/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../Reusable/Container";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Output = () => {
  const { inputValue } = useContext(CodeContext);

  return (
    <Container>
      <div>
        <p style={{textAlign: `${inputValue}`}}>Text</p>
      </div>
    </Container>
  );
};


export default Output;
