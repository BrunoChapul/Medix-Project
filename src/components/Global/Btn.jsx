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
  background: ${(props) => props.$bgColor || props.theme.colors.default};
  color: ${(props) => props.$txtColor || props.theme.colors.txt};
  border: none;
  border-radius: 0.8rem;
  text-align: ${(props) => props.$align};
  cursor: pointer;
  font-family: ${(props) => props.theme.font.primary};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.$hvrBgColor};
    color: ${(props) => props.$hvrColor};
  }
`;

export default Btn;
