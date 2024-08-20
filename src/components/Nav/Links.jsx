import styled from "styled-components";

// Comp
import Btn from "../Global/Btn";

function Links({ children }) {
  return (
    <Content>
      <Btn
        txtColor="#FFF"
        bgColor="linear-gradient(to left, #214cb5, #2380ea)"
        align="left"
      >
        {children}
      </Btn>
    </Content>
  );
}

const Content = styled.div`
  display: grid;
  gap: 1rem;
`;

export default Links;
