/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question9 = () => {
  const { inputValue, data } = useContext(CodeContext);
  return (
    <div css={styles}>
      <div className="box1" style={{ border: inputValue === data[8].answer ? "2px solid black" : null }}>
        <p>
          Add a border of 2px solid black around the box.
        </p>
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
  .box1 {
    padding: 20px;
  }
`;

export default Question9;
