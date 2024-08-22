import styled from "styled-components";

// Components
import Search from "./Search";
import Notification from "./Notification";
import Text from "../Global/Text";

function TopBar() {
  return (
    <Nav>
      <div>
        <Text size="1rem">Hi Bruno Chapul</Text>
        <Text size="1.8rem" weight="bold" margin=".4rem 0 0 0">
          Welcome back
        </Text>
      </div>
      <SearchContent>
        <Search />
        <Notification />
      </SearchContent>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.main + 33};
`;

const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default TopBar;
