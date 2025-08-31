import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="label">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 20px;
    margin: 12px 0;
  }

  .label {
    font-size: 22px;
    font-weight: 700;
    color: #1d3557; /* dark blue */
  }

  .error {
    color: #e63946; /* red */
    font-weight: 600;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 12px;
  border: 2px solid #1d3557;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.isSelected ? "#1d3557" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#1d3557")};

  &:hover {
    background-color: #e63946; /* red hover */
    color: white;
    transform: scale(1.1);
  }
`;
