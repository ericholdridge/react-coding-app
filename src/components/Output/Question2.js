/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question2 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div
        className="box"
        style={{ padding: inputValue === data[1].answer ? "50px" : null }}
      >
        <p>Add 50px of padding</p>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  .box {
    border: 4px solid green;
    p {
    }
  }
`;

export default Question2;
