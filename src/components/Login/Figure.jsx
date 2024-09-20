import styled from "styled-components";

import Text from "../Ui/Text";
import Img from "../../_assets/images/loginImage.jpg";
import Copyright from "../Ui/Copyright";

function Figure() {
  return (
    <Image>
      <Text>
        <Copyright />
      </Text>
    </Image>
  );
}

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${Img}");
  background-size: cover;
  background-position: right;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export default Figure;
