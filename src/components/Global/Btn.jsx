import styled from "styled-components";

function Btn({ children, bgColor, txtColor, hvrBgColor, hvrColor, align }) {
  return (
    <Button
      $txtColor={txtColor}
      $bgColor={bgColor}
      $hvrBgColor={hvrBgColor}
      $hvrColor={hvrColor}
      $align={align}
    >
      {children}
    </Button>
  );
}

const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background: ${(props) => props.$bgColor || "#FFF"};
  color: ${(props) => props.$txtColor || "#000"};
  border: none;
  border-radius: 0.8rem;
  text-align: ${(props) => props.$align};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => props.$hvrBgColor};
    color: ${(props) => props.$hvrColor};
  }
`;

export default Btn;
