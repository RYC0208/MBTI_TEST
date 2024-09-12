import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuthStore from "../zustand/authStore";

const Header = () => {
  const { isAuthenticated, logout, token } = useAuthStore();

  return (
    <HeaderContainer>
      <header>
        <Link to="/">
          <div>로고</div>
        </Link>
        <div className="buttonArea">
          {isAuthenticated && token ? (
            <>
              <Link to="/test">
                <p>MBTI 테스트</p>
              </Link>
              <Link to="/testresult">
                <p>결과</p>
              </Link>
              <Link to="/mypage">
                <p>마이페이지</p>
              </Link>
              <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button>로그인</button>
              </Link>
              <Link to="/signUp">
                <button>회원가입</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 8px 6px -6px #666;
  background-color: white;
  padding-left: 60px;
  padding-right: 60px;
  p {
    color: #ff4b4b;
    font-size: 15px;
  }
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .buttonArea {
      display: flex;
      gap: 20px;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      button {
        border: 1px solid;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        background-color: #ff4b4b;
        color: white;
      }
    }
  }
`;
