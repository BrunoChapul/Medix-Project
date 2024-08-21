import styled, { useTheme } from "styled-components";
import Doctor from "/images/doctor.png";

// Components
import Btn from "../Global/Btn";
import Text from "../Global/Text";
import Title from "../Global/Title";

function Banner() {
  const theme = useTheme();
  return (
    <Content>
      <div>
        <Title
          size="2.6rem"
          color={theme.colors.default}
          weight="bold"
          margin="0 0 1rem 0"
        >
          Need to find a doctor? <br />
          Go online with us!
        </Title>
        <Text size="1rem" color={theme.colors.default} margin="0 0 1rem 0">
          Get your first medical service at your home.
        </Text>
        <Btn
          txtColor={theme.colors.primary}
          hvrBgColor={theme.colors.secondary}
          hvrColor={theme.colors.default}
        >
          Find now
        </Btn>
      </div>
      <Image src={Doctor} alt="Doctor" />
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(
      circle at top,
      transparent 19%,
      #4f46e4 20%,
      #4f46e4 25%,
      transparent 26%
    ),
    radial-gradient(
      circle at bottom,
      transparent 19%,
      #4f46e4 20%,
      #4f46e4 25%,
      transparent 26%
    ),
    radial-gradient(
      circle at right,
      transparent 19%,
      #4f46e4 20%,
      #4f46e4 25%,
      transparent 26%
    ),
    radial-gradient(
      circle at left,
      transparent 19%,
      #4f46e4 20%,
      #4f46e4 25%,
      transparent 26%
    );
  background-size: 3em 3em;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 1;
  border-radius: 0.8rem;
  padding: 3rem 5rem 3rem 3rem;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 45%;
  position: absolute;
  right: 5rem;
  bottom: -0.05rem;
`;

export default Banner;
