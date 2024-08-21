import styled, { useTheme } from "styled-components";

// Components
import Search from "./Search";
import Notification from "./Notification";
import Container from "../Container";

function TopBar() {
  const theme = useTheme();
  return (
    <Container
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderBottom: `0.1rem solid ${theme.colors.main + "33"}`,
      }}
    >
      <Nav>
        <div>
          <User>Hi Bruno Chapul</User>
          <Message>Welcome back</Message>
        </div>
        <SearchContent>
          <Search />
          <Notification />
        </SearchContent>
      </Nav>
    </Container>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const User = styled.p`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const Message = styled.h1`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 1.4rem;
  font-weight: 500;
`;

const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default TopBar;
