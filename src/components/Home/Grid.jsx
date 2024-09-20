import styled from "styled-components";

import Appontiment from "./Appontiment";
import Available from "./Available";
import Date from "./Date";

function Grid() {
  return (
    <DGrid>
      <One>
        <Appontiment />
      </One>
      <Two>
        <Date />
      </Two>
      <Three>
        <Available />
      </Three>
    </DGrid>
  );
}

const One = styled.div`
  grid-area: one;
`;

const Two = styled.div`
  grid-area: two;
`;

const Three = styled.div`
  grid-area: three;
`;

const DGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "one two" "three two";
  grid-template-columns: 3.5fr 1.5fr;
  gap: 2rem;
`;

export default Grid;
