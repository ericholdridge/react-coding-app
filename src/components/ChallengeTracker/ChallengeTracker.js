/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ChallengeTracker = () => {
  return (
    <div css={styles} className="challengeTracker">
      <p>Challenge: "change this value" of 10</p>
    </div>
  );
};

const styles = css`
  width: 100%;
  p {
    color: #ccc;
    font-weight: 600;
  }
`

export default ChallengeTracker;
