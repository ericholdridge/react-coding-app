/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question8 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div
        className="box1">
          <p style={{ fontSize: inputValue === data[7].answer ? "25px" : null }}>Change the font size to 25px.</p>
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
`;

export default Question8;