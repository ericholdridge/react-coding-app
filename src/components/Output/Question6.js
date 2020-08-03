/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question6 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div className="box1" style={{backgroundColor: inputValue === data[5].answer ? "#7F7FFF" : null}}>
        <p>Add a background color of #7F7FFF</p>
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
    border: 1px solid #7F7FFF;
  }
`;

export default Question6;
