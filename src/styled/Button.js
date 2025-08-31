// styled/Button.js
import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 12px 28px;
  background: linear-gradient(135deg, #e63946, #1d3557); /* 🔥 red → blue */
  border-radius: 8px;
  min-width: 220px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }
`;
