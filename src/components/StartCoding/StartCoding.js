/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";
import Container from "../Reusable/Container";
import Output from "../Output/Output";

const StartCoding = () => {
  const { number } = useParams();
  const { data, currQuestion, inputValue, setInputValue } = useContext(
    CodeContext
  );
  let codeString = "{";
  let codeString2 = "}";

  return (
    <div css={styles} className="startCoding">
      <Container>
        <div className="codeInfo">
          <div className="codeTitle">
            <h1>Learn To Code</h1>
            <Link to={`/question/${parseInt(number, 10) + 1}`}>
              Next {number}
            </Link>
          </div>
          <div className="leftSide">
            <p>
              Welcome to Learn To Code, a game where you can learn the
              fundamentals of CSS.
            </p>
            <div className="codeQuestions">
              {number === "1" && <p>Pratice 1: {data[0].question}</p>}
              {number === "2" && <p>Pratice 2: {data[1].question}</p>}
              {number === "3" && <p>Pratice 3: {data[2].question}</p>}
              {number === "4" && <p>Pratice 4: {data[3].question}</p>}
              {number === "5" && <p>Pratice 5: {data[4].question}</p>}
              {number === "6" && <p>Pratice 6: {data[5].question}</p>}
              {number === "7" && <p>Pratice 7: {data[6].question}</p>}
            </div>
            <div className="codeEditor">
              <div className="editorNumbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>
              <div className="editorCss">
                <p>.code {codeString}</p>
                <input
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p>{codeString2}</p>
              </div>
            </div>
            <div className="createdBy">
              <p>
                Learn To Code is created by <a href="">Eric Holdridge</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Output />
      </Container>
    </div>
  );
};

const styles = css`
  background: #55505c;
  min-height: 100vh;
  display: flex;
  .container {
    width: 50%;
    .codeInfo {
      padding: 50px 0;
      width: 100%;
      .codeTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          padding: 10px 40px;
          color: #fff;
          text-decoration: none;
          background: #000;
          border-radius: 8px;
          letter-spacing: 1px;
        }
      }
      .leftSide {
        padding: 20px 0 0 0;
        p {
          font-size: 1.1rem;
        }
        .codeQuestions {
          padding: 10px 0 0 0;
          p {
            color: #fff;
            padding: 0 0 2px 0;
          }
        }
        .codeEditor {
          display: flex;
          background: black;
          .editorNumbers {
            display: flex;
            flex-direction: column;
            background: skyblue;
            align-items: center;
            width: 100%;
            max-width: 30px;
            span {
              color: #fff;
              padding: 4px 0;
            }
          }
          .editorCss {
            width: 100%;
            color: #fff;
            padding: 0 0 0 20px;
            p {
              font-size: 0.9rem;
              padding: 4px 0 0 0;
            }
            input {
              margin: 8px 0 0 0;
              outline: none;
              padding: 2px 0;
            }
          }
        }
        .createdBy {
          text-align: center;
          padding: 100px 0 0 0;
          p {
            font-size: 0.85rem;
          }
          a {
            color: #fff;
          }
        }
      }
    }
  }
  .rightSide {
    width: 50%;
    background: #fff;
    .container {
      p {
        color: #000;
      }
    }
  }
`;

export default StartCoding;
