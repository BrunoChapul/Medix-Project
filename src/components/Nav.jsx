import styled from "styled-components";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoImg from "/images/logo.svg";
import Btn from "./Button";

function Nav() {
  return (
    <Container>
      <Logo src={LogoImg} />
      <Content>
        <Title>Tools</Title>
        <Links>
          <Btn
            txtColor="#FFF"
            bgColor="linear-gradient(to left, #214cb5, #2380ea)"
            align="left"
          >
            <SpaceDashboardIcon />
            Dashboard
          </Btn>
        </Links>
      </Content>
    </Container>
  );
}

const Container = styled.nav`
  box-shadow: -5px 0px 7px #01120a;
  flex-wrap: wrap;
  padding: 2rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h1`
  color: #454858;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: grid;
  gap: 1rem;
`;

export default Nav;
