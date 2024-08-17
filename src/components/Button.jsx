import styled from "styled-components";

function Button({ children, bgColor, txtColor, hvrBgColor, align }) {
  return (
    <Btn
      txtColor={txtColor}
      bgColor={bgColor}
      hvrBgColor={hvrBgColor}
      align={align}
    >
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background: ${(props) => props.bgColor || "#FFF"};
  color: ${(props) => props.txtColor || "#000"};
  border: none;
  border-radius: 0.8rem;
  text-align: ${(props) => props.align};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: all 0.4s;
  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => props.hvrBgColor};
  }
`;

export default Button;
