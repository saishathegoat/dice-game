import styled, { keyframes } from "styled-components";
import { useState } from "react";

const RollDice = ({ roleDice, currentDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    if (isRolling) return; // prevent spam clicks while animating
    setIsRolling(true);

    setTimeout(() => {
      roleDice(); // update dice number
      setIsRolling(false);
    }, 600); // match animation duration
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={handleRoll}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          className={isRolling ? "rolling" : ""}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

// 🎲 Shake + rotate animation
const rollAnim = keyframes`
  0%   { transform: rotate(0deg) translate(0, 0); }
  25%  { transform: rotate(90deg) translate(5px, -5px); }
  50%  { transform: rotate(180deg) translate(-5px, 5px); }
  75%  { transform: rotate(270deg) translate(5px, 5px); }
  100% { transform: rotate(360deg) translate(0, 0); }
`;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  .dice img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-bottom: 20px;
    transition: transform 0.2s ease;
  }

  /* 🎲 Rolling animation */
  .dice img.rolling {
    animation: ${rollAnim} 0.6s ease-in-out;
  }

  p {
    font-size: 24px;
    margin-top: 8px;
    color: #f1faee; /* soft white from palette */
    font-weight: 500;
  }
`;
