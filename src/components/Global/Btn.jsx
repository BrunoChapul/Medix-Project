import styled from "styled-components";

function Btn({
  children,
  bgColor,
  txtColor,
  hvrBgColor,
  hvrColor,
  align,
  width,
}) {
  return (
    <Button
      $txtColor={txtColor}
      $bgColor={bgColor}
      $hvrBgColor={hvrBgColor}
      $hvrColor={hvrColor}
      $align={align}
      $width={width}
    >
      {children}
    </Button>
  );
}

const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background: ${(props) => props.$bgColor};
  color: ${(props) => props.$txtColor || props.theme.colors.txt};
  border: none;
  border-radius: 0.8rem;
  text-align: ${(props) => props.$align || "center"};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.regularFontFamily};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: ${(props) => props.$width};

  &:hover {
    background: ${(props) => props.$hvrBgColor};
    color: ${(props) => props.$hvrColor};
  }
`;

export default Btn;
