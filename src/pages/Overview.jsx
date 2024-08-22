// Components
import Banner from "../components/Home/Banner";
import Container from "../components/Container";
import TopBar from "../components/Topbar/TopBar";
import BookingInfos from "../components/Home/BookingInfos";

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Banner />
        <BookingInfos />
      </Container>
    </>
  );
}

export default Home;
