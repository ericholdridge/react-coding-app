/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Navigation = () => {
  return (
    <div css={styles} className="codeTitle">
      <h1>Learn To Code</h1>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  h1 {
    color: #fff;
    text-align: center;
  }
`;

export default Navigation;
