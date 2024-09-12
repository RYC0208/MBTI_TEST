import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1400px;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
`