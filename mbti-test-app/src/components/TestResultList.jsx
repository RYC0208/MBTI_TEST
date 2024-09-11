import React from "react";
import TestResultItem from "./TestResultItem";
import styled from "styled-components";
import useAuthStore from "../zustand/authStore";

const TestResultList = ({ list }) => {
  const { user } = useAuthStore();

  return (
    <ListContainer>
      {list
        .filter(
          (item) =>
            item.visibility === true || (user && item.userId === user.userId)
        )
        .map((item) => (
          <TestResultItem key={item.id} item={item} userId={user.userId} />
        ))}
    </ListContainer>
  );
};

export default TestResultList;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
