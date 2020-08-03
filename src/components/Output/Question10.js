/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question10 = () => {
const { inputValue, data } = useContext(CodeContext);
  return (
    <div css={styles}>
      <div className="box1" style={{ borderRadius: inputValue === data[9].answer ? "50%" : null }}>
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
    border: 1px solid black;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Question10;
