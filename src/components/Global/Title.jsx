import styled from "styled-components";

function Text({ children, size, color, weight, margin }) {
  return (
    <H1 $size={size} $txtColor={color} $fontWeight={weight} $margin={margin}>
      {children}
    </H1>
  );
}

const H1 = styled.h1`
  font-size: ${(props) => props.$size || "1rem"};
  color: ${(props) => props.$txtColor || props.theme.colors.txt};
  font-weight: ${(props) => props.$fontWeight || "unset"};
  margin: ${(props) => props.$margin || 0};
  font-family: ${(props) => props.theme.font.primary};
`;

export default Text;
