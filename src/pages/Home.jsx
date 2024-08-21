// Components
import Banner from "../components/Home/Banner";
import Container from "../components/Container";
import TopBar from "../components/Topbar/TopBar";
import BookingInfos from "../components/Home/BookingInfos";
import Wrapper from "../components/Home/Appointment/Wrapper";

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Banner />
        <BookingInfos />
        <Wrapper />
      </Container>
    </>
  );
}

export default Home;
