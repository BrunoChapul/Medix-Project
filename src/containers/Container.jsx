import styled from "styled-components";

function Container({ children, style }) {
  return <Content style={style}>{children}</Content>;
}

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export default Container;
