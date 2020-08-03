/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";
import Container from "../Reusable/Container";
import CorrectAnswer from "../CorrectAnswer/CorrectAnswer";
import Navigation from "../Navigation/Navigation";
import Question1 from "../Output/Question1";
import Question2 from "../Output/Question2";
import Question3 from "../Output/Question3";
import Question4 from "../Output/Question4";
import Question5 from "../Output/Question5";
import Question6 from "../Output/Question6";
import Question7 from "../Output/Question7";
import Question8 from "../Output/Question8";
import Question9 from "../Output/Question9";
import Question10 from "../Output/Question10";

const StartCoding = () => {
  const { number } = useParams();
  const { data, inputValue, setInputValue } = useContext(
    CodeContext
  );

  return (
    <div css={styles} className="startCoding">
      <Navigation />
      <Container>
        <div className="topHalf">
          <div className="leftSide">
            <p>
              Welcome to Learn To Code, a game where you can learn the
              fundamentals of CSS.
            </p>
            {/* Display the correct question depending on the link number */}
            <div className="codeQuestions">
              {number === "1" && <p>Pratice 1: {data[0].question}</p>}
              {number === "2" && <p>Pratice 2: {data[1].question}</p>}
              {number === "3" && <p>Pratice 3: {data[2].question}</p>}
              {number === "4" && <p>Pratice 4: {data[3].question}</p>}
              {number === "5" && <p>Pratice 5: {data[4].question}</p>}
              {number === "6" && <p>Pratice 6: {data[5].question}</p>}
              {number === "7" && <p>Pratice 7: {data[6].question}</p>}
              {number === "8" && <p>Pratice 8: {data[7].question}</p>}
              {number === "9" && <p>Pratice 9: {data[8].question}</p>}
              {number === "10" && <p>Pratice 10: {data[9].question}</p>}
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
              {/* Get the value of input and store it in a variable */}
              <div className="editorCss">
                <p>.code &#123;</p>
                <input
                  type="text" value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </div>
        {/* Display the correct output depending on the question number */}
        <div className="bottomHalf">
          {number === "1" && <Question1 />}
          {number === "2" && <Question2 />}
          {number === "3" && <Question3 />}
          {number === "4" && <Question4 />}
          {number === "5" && <Question5 />}
          {number === "6" && <Question6 />}
          {number === "7" && <Question7 />}
          {number === "8" && <Question8 />}
          {number === "9" && <Question9 />}
          {number === "10" && <Question10 />}
        </div>
        {/* If the user types in the correct answer, display the correct answer message */}
        {inputValue === data[0].answer && <CorrectAnswer />}
        {inputValue === data[1].answer && <CorrectAnswer />}
        {inputValue === data[2].answer && <CorrectAnswer />}
        {inputValue === data[3].answer && <CorrectAnswer />}
        {inputValue === data[4].answer && <CorrectAnswer />}
        {inputValue === data[5].answer && <CorrectAnswer />}
        {inputValue === data[6].answer && <CorrectAnswer />}
        {inputValue === data[7].answer && <CorrectAnswer />}
        {inputValue === data[8].answer && <CorrectAnswer />}
        {inputValue === data[9].answer && <CorrectAnswer />}
      </Container>
    </div>
  );
};

const styles = css`
  background: #55505c;
  min-height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    .topHalf {
      padding: 50px 0;
      width: 100%;
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
              min-width: 200px;
              padding: 2px 0;
            }
          }
        }
      }
    }
  }
  .bottomHalf {
    background: #fff;
    min-height: 50vh;
  }
`;

export default StartCoding;
