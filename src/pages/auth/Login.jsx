import styled from "styled-components";

import Figure from "../../components/Login/Figure";

function Login() {
  return (
    <Container>
      <Figure />
      <Options></Options>
    </Container>
  );
}

const Container = styled.main`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

const Options = styled.div``;

export default Login;
