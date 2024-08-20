import styled from "styled-components";

function Text({ children, size, color, margin }) {
  return (
    <P $size={size} $txtColor={color} $margin={margin}>
      {children}
    </P>
  );
}

const P = styled.p`
  font-size: ${(props) => props.$size || "1rem"};
  color: ${(props) => props.$txtColor || "#000"};
  margin: ${(props) => props.$margin || 0};
  font-family: "Montserrat", sans-serif;
`;

export default Text;
