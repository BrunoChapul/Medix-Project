import styled from "styled-components";
import Appontiment from "./Appontiment";
import Available from "./Available";
import Date from "./Date";

function Wrapper() {
  return (
    <Grid>
      <Appontiment />
      <Available />
      <Date />
    </Grid>
  );
}

const Grid = styled.div`
  width: 100%;
`;

export default Wrapper;
