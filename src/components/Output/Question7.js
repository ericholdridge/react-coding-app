/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question7 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div className="box1">
        <p style={{ color: inputValue === data[6].answer ? "red" : null }}>
          Change this text color from black to red.
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
`;

export default Question7;
