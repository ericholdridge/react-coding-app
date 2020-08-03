/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const Question4 = () => {
  const { inputValue, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <div
        className="box1">
        <a href="" style={{ textDecoration: inputValue === data[3].answer ? "none" : null }}>Remove decoration</a>
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
    a {
      background: #000;
      padding: 10px 30px;
      color: #fff;
    }
  }
`;

export default Question4;
