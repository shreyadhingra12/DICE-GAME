import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, SetCurrentDice] = useState(1);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = GenerateRandomNumber(1, 7);
    SetCurrentDice((prev) => randomNumber);
    
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
