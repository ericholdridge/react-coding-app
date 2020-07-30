/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Hero = () => {
  return (
    <section css={styles} className="hero">
      <Banner title="Learn to Code" />
      <div className="container">
        <div className="hero-content">
          <h2>Start your coding journey today!</h2>
          <Link to="/question/1">Start Now</Link>
        </div>
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  .container {
    display: grid;
    place-items: center;
    min-height: calc(85vh - 113px);
    .hero-content {
      text-align: center;
      h2 {
        font-size: 1.8rem;
      }
      a {
        display: inline-block;
        margin: 20px 0 0 0;
        padding: 14px 34px;
        border-radius: 4px;
        cursor: pointer;
        background: #000;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1rem;
        outline: none;
        text-decoration: none;
      }
    }
  }
`;

export default Hero;
