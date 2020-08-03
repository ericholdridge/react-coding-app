/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CodeContext } from "../Context/Context";

const CorrectAnswer = () => {
  const { number } = useParams();
  const { data, inputValue, setInputValue } = useContext(CodeContext);

  return (
    <div className="correctAnswer" css={styles}>
      <p>You typed in the correct answer. Good job!</p>
      <Link 
        to={ number >= 10 ? '/endofcourse' : `/question/${parseInt(number, 10) + 1}`} 
        onClick={() => setInputValue("")}
      >
        Next
      </Link>
    </div>
  );
};

const styles = css`
  width: 100%;
  background: green;
  margin: 50px 0 0 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #fff;
    font-size: 20px;
  }
  a {
    padding: 10px 40px;
    color: #fff;
    text-decoration: none;
    background: #000;
    border-radius: 8px;
    letter-spacing: 1px;
  }
`;

export default CorrectAnswer;
