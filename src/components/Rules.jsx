import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking the dice, if your selected number matches the dice roll, 
          you earn the same points as the dice value.
        </p>
        <p>If your guess is wrong, 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9); /* ✅ light transparent card */
  padding: 24px 28px;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 26px;
    font-weight: 700;
    color: #1d3557; /* dark blue heading */
    margin-bottom: 16px;
  }

  .text {
    margin-top: 12px;
    p {
      font-size: 18px;
      color: #457b9d; /* soft blue for text */
      margin-bottom: 8px;
      line-height: 1.5;
    }
  }
`;
