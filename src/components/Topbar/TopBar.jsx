import styled from "styled-components";

// Components
import Search from "./Search";
import Notification from "./Notification";
import Container from "../Global/Container";

function TopBar() {
  return (
    <Container style={{ borderBottom: "0.1rem solid rgba(000, 000, 000, .2)" }}>
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
  display: flex;
  justify-content: space-between;
`;

const User = styled.p`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.4rem;
`;

const Message = styled.h1`
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default TopBar;
