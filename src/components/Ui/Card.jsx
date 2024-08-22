import styled from "styled-components";

function Card({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: auto;
  padding: 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 15px #dfdfdf;
`;

export default Card;
