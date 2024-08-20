import styled from "styled-components";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
  width: 100vw;
  height: 100vh;
`;

export default Layout;
