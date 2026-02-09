import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, SetCurrentDice] = useState(1);
  const [error, SetError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      SetError("You have not selected any number");
      return;
    }

    const randomNumber = GenerateRandomNumber(1, 7);
    SetCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          error={error}
          SetError={SetError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
        onClick={()=>setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
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
  .btns {
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
