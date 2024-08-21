import styled from "styled-components";
import LogoImg from "/images/logo.svg";

// Components
import Links from "./Links";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

function Nav() {
  return (
    <Container>
      <LogoImage src={LogoImg} alt="Logo" />
      <NavContent>
        <Title>Tools</Title>
        <Links>
          <SpaceDashboardIcon aria-label="Dashboard icon" />
          Overview
        </Links>
      </NavContent>
    </Container>
  );
}

const Container = styled.nav`
  box-shadow: -5px 0px 7px ${(props) => props.theme.colors.main};
  flex-wrap: wrap;
  padding: 2rem;
`;

const LogoImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
`;

const NavContent = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.typography.boldFontFamily};
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export default Nav;
