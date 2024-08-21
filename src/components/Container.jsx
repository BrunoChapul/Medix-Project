import styled from "styled-components";

function Container({ children, style }) {
  return <Content style={style}>{children}</Content>;
}

const Content = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Container;
