/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question1 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <p style={{ textAlign: inputValue === data[0].answer ? "center" : null }}>
        Center this text horizontally
      </p>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
`;

export default Question1;
