import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeH1>무료 성격 테스트</HomeH1>
      <p> 자신의 성격 유형을 검사해보세요</p>
      <ul>
        <li>
          <h3>성격 유형 검사</h3>
          <p>케레비라무무조치카포하세레제</p>
        </li>
        <li>
          <h3>성격 유형 이해</h3>
          <p>이리리리로로다두두로로레레리</p>
        </li>
        <li>
          <h3>팀 평가</h3>
          <p>샬라샬라알리알리욜라셩</p>
        </li>
      </ul>
      <Link to="/test">
        <button>성격 유형 검사하기</button>
      </Link>
    </HomeContainer>
  );
};

export default Home;


const HomeH1 = styled.h1`
    font-size: 30px;
    font-weight: bold;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
      width: 300px;
      height: 150px;
      background-color: white;
      box-shadow: 0px 5px 5px -6px #666;
      padding: 20px;

      h3 {
        font-size: 17px;
        font-weight: bold;
        height: 30%;
        display: flex;
        align-items: center;
      }
      p{
        height: 70%;
        display: flex;
      }
    }
  }
  button{
    border-radius: 15px;
    height: 40px;
    width: 150px;
    color: white;
    background-color: #ff4b4b;
    font-size: 14px;
  }
`;
