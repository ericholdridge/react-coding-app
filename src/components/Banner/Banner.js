/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Banner = ({title}) => {
  return (
    <div css={styles} className="banner">
      <h1>{title}</h1>
    </div>
  );
};

const styles = css`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  color: 	#FFFAF1;
  background: black;
  font-size: 1.6rem;
`;

export default Banner;
