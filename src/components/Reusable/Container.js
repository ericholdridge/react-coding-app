/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children }) => <div css={styles} className="container">{children}</div>

const styles = css`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
`;

export default Container;
