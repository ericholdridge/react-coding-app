/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useEffect } from "react";
import ChallengeTracker from "../ChallengeTracker/ChallengeTracker";
import { useParams, useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const StartCoding = () => {
  const history = useHistory();
  const {number} = useParams();
  // useEffect(() => {
  //   history.push("/question/1" );
  // }, []);
  const { data, currQuestion } = useContext(CodeContext);
  return (
    <div css={styles} className="startCoding">
      <div className="leftSide">
        <ChallengeTracker />
        {number === "1" && <p>{data[0].question}</p>}
        <Link to={`/questions/${parseInt(number, 10) + 1}`}>
          Hello
        </Link>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  .leftSide {
    border: 1px solid black;
    padding: 50px 0;
    width: 100%;
    span {
      color: gray;
      font-weight: 600;
    }
    p {
      font-weight: 600;
      font-size: 1.4rem;
    }
    .values {
      display: flex;
      align-items: center;
      span {
      }
      p {
        font-size: 1rem;
      }
    }
    .editor {
      width: 100%;
      max-width: 400px;
      .editorNumbers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 20px;
        span {
          padding: 6px;
        }
      }
    }
  }
`;

export default StartCoding;
