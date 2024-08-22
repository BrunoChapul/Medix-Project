import styled from "styled-components";

function Text({ children, size, color, weight, margin, width }) {
  return (
    <H1
      $size={size}
      $txtColor={color}
      $fontWeight={weight}
      $margin={margin}
      $width={width}
    >
      {children}
    </H1>
  );
}

const H1 = styled.h1`
  width: ${(props) => props.$width || "auto"};
  font-size: ${(props) => props.$size || "1rem"};
  color: ${(props) => props.$txtColor || props.theme.colors.txt};
  font-weight: ${(props) => props.$fontWeight || "unset"};
  margin: ${(props) => props.$margin || 0};
  font-family: ${(props) =>
    props.$fontWeight === "bold"
      ? props.theme.typography.boldFontFamily
      : props.theme.typography.regularFontFamily};
`;

export default Text;
