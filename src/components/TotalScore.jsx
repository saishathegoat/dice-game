import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 220px;
  text-align: center;
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #e63946, #1d3557); /* 🔥 red → blue */
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h1 {
    font-size: 90px;
    line-height: 100px;
    margin: 0;
    font-weight: 900;
    color: #f1faee; /* soft white for clarity */
  }

  p {
    font-size: 22px;
    font-weight: 600;
    margin-top: 8px;
    color: #f8edeb; /* subtle light tone */
  }
`;
