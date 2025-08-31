import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <img src="/images/dices.png" alt="dice" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <StyledButton onClick={toggle}>Play Now</StyledButton>
        </div>
      </Container>
    </Wrapper>
  );
};

export default StartGame;

const Wrapper = styled.div`
  /* 🔥 full responsive background */
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #e63946, #1d3557);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1180px;
  width: 90%;   /* makes it responsive */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap; /* stack on small screens */
  text-align: center;

  .content {
    h1 {
      font-size: clamp(48px, 8vw, 96px); /* responsive font size */
      white-space: nowrap;
      color: #fff;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background: #1d3557;
  color: #fff;
  border: none;
  padding: 12px 36px;
  font-size: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #e63946;
    transform: scale(1.05);
  }
`;
