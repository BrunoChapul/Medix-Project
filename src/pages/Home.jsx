// Components
import Banner from "../components/Home/Banner";
import Container from "../components/Container";
import TopBar from "../components/Topbar/TopBar";
import BookingInfo from "../components/Home/BookingInfo";

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Banner />
        <BookingInfo />
      </Container>
    </>
  );
}

export default Home;
