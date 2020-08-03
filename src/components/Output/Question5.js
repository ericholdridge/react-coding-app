/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question5 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div
        className="box1">
        <ul style={{ listStyle: inputValue === data[4].answer ? "none" : null }}>
          <li><a href="">Milk</a></li>
          <li><a href="">Eggs</a></li>
          <li><a href="">Bread</a></li>
          <li><a href="">Juice</a></li>
        </ul>
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
  }
`;

export default Question5;
