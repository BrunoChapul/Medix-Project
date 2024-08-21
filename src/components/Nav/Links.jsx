import styled, { useTheme } from "styled-components";

// Comp
import Btn from "../Global/Btn";

function Links({ children }) {
  const theme = useTheme();
  return (
    <Content>
      <Btn
        txtColor={theme.colors.default}
        bgColor={theme.colors.primary}
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
