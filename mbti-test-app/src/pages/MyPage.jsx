import React, { useEffect, useState, useContext } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";

const MyPage = () => {
  const { isAuthenticated, token } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [newNickname, setNewNickname] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token && isAuthenticated) {
          const userData = await getUserProfile(token);
          setProfile(userData);
        }
      } catch (error) {
        console.error("프로필 정보를 가져오지 못했습니다:", error);
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await updateProfile(token, formData);
      if (response.success) {
        setProfile((prevState) => ({
          ...prevState,
          nickname: response.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
        setNewNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname:", error);
    }
  };

  if (!profile) {
    return <div>로딩 중</div>;
  }

  return (
    <MyPageContainer>
      <h1>프로필 수정</h1>
      <form onSubmit={handleNicknameChange}>
        <div className="nicknameArea">
          <span>닉네임</span>
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder={profile.nickname}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  gap: 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .nicknameArea {
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
      }

      input {
        height: 40px;
        border: 1px solid gainsboro;
        border-radius: 10px;
      }
    }

    button {
      height: 40px;
      background-color: #ff4b4b;
      border-radius: 10px;
      color: white;
      font-size: 14px;
    }
  }
`;
