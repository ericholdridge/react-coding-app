/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../Navigation/Navigation";

const EndProject = () => {
  return (
    <section css={styles}>
      {/* <Navigation /> */}
      <div className="box">
        <h3>You completed the 10 question CSS course!</h3>
        <p>We are currently working to add more courses.</p>
        <p className="thankYou">Thank you!</p>
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
  display: grid;
  place-items: center;
  .box {
    background: #000;
    padding: 100px; 
    color: #fff;
    text-align: center;
    .thankYou {
      padding: 20px 0 0 0;
    }
  }
`

export default EndProject;
