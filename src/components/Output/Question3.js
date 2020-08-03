/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question3 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div className="box">
        <p>Test</p>
      </div>
      <div
        className="box1"
        style={{ marginTop: inputValue === data[2].answer ? "25px" : null }}
      >
        <p>Add 25px of margin to the top of the box</p>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  .box {
    border: 1px solid red;
  }
  .box1 {
    border: 1px solid green;
    p {
    }
  }
`;

export default Question3;
