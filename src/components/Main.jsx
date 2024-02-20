import React from "react";
import Scoreboard from "./scoreboard/Scoreboard";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <Scoreboard></Scoreboard>
      {/* <Cardsgrid></Cardsgrid> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Main;
