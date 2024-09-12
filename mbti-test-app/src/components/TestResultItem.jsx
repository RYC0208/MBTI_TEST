import React from "react";
import styled from "styled-components";
import { MBTI_DESCRIPTIONS } from "../data/decriptons";
import useMbtiStore from "../zustand/mbtiStore";

const TestResultItem = ({ item, userId }) => {
  const { deleteTestResult, updateVisibility } = useMbtiStore();

  return (
    <ItemContainer>
      <div className="itemTop">
        <h2>{item.nickname}</h2>
        <p>{item.date}</p>
      </div>
      <div className="itemMiddle">
        <h1>{item.result}</h1>
        <p>{MBTI_DESCRIPTIONS[item.result].description}</p>
        {item.userId === userId && (
          <div className="buttonArea">
            <button
              className="deleteButton"
              onClick={() => deleteTestResult(item.id)}
            >
              삭제
            </button>
            <button
              className="visibilityButton"
              onClick={() => updateVisibility(item.id, item.visibility)}
            >
              {item.visibility ? "비공개로 전환" : "공개로 전환"}
            </button>
          </div>
        )}
      </div>
    </ItemContainer>
  );
};

export default TestResultItem;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 300px;
  background-color: #446386;
  padding: 20px;
  border-radius: 15px;

  .itemTop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    height: 50px;
    h2 {
      font-size: 22px;
      font-weight: bold;
      color: white;
    }

    p {
      font-size: 14px;
      color: #818181;
    }
  }
  .itemMiddle {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 50%;
    h1 {
      margin-top: 5px;
      font-size: 24px;
      font-weight: bold;
      color: #ffed47;
    }

    p {
      font-size: 14px;
      color: #b9b9b9;
    }

    .buttonArea {
      display: flex;
      flex-direction: row-reverse;
      gap: 5px;
      margin-top: 10px;
      .visibilityButton {
        background-color: #2bb1ff;
        width: 120px;
        height: 40px;
        border-radius: 10px;
        color: white;
      }

      .deleteButton {
        background-color: #ff5b32;
        width: 120px;
        height: 40px;
        border-radius: 10px;
        color: white;
      }
    }
  }
`;
