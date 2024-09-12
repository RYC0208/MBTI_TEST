import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useAuthStore from "../zustand/authStore";

const MyPage = () => {
  const { fetchProfile, profile, updateProfile } = useAuthStore();
  const [newNickname, setNewNickname] = useState("");

  useEffect(() => {
    fetchProfile();
  }, [profile]);

  const HandleUpdateProfile = async (e) => {
    e.preventDefault();
    const result = await updateProfile(newNickname);
    if (result) {
      alert("닉네임이 변경되었습니다.");
      setNewNickname("");
    } else {
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  if (!profile) {
    return <div>로딩 중</div>;
  }

  return (
    <MyPageContainer>
      <h1>프로필 수정</h1>
      <form onSubmit={HandleUpdateProfile}>
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
