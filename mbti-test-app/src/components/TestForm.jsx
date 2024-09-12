import React, { useState } from "react";
import { questions } from "../data/questions";
import styled from "styled-components";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answers.includes(null)) {
      onSubmit(answers);
    } else {
      alert("모든 질문에 답변해주세요.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <div className="questionArea" key={q.id}>
          <p className="question">
            {index + 1}. {q.question}
          </p>
          {q.options.map((option, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">제출하기</button>
    </FormContainer>
  );
};

export default TestForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
  padding: 15px;
  .questionArea {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .question {
      font-size: 18px;
      font-weight: bold;
    }

    label {
      border: 1px solid #c9c9c9;
      border-radius: 10px;
      height: 45px;
      padding: 10px;
      cursor: pointer;
    }
  }

  button {
    background-color: #ff4b4b;
    color: white;
    border-radius: 15px;
    height: 45px;
  }
`;
