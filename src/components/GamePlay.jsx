import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button"; // ⬅️ Removed OutlineButton import
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
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
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        {/* ⬇️ Changed OutlineButton → Button */}
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  min-height: 100vh;

  /* 🎨 Background gradient with your red + blue theme */
  background: linear-gradient(135deg, #1d3557, #457b9d, #e63946);
  color: #f1faee;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    padding: 0 40px;
  }

  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;
