import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import TestResultItem from "./TestResultItem";
import styled from "styled-components";

const TestResultList = ({ list }) => {
  const { userDataLocal } = useContext(AuthContext);

  return (
    <ListContainer>
      {list
        .filter(
          (item) => item.visibility === true || item.userId === userDataLocal.id
        )
        .map((item) => (
          <TestResultItem key={item.id} item={item} />
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
