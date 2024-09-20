// Components
import Banner from "../../components/Home/Banner";
import Container from "../../containers/Container";
import TopBar from "../../components/Topbar/TopBar";
import BookingInfos from "../../components/Home/BookingInfos";
import Grid from "../../components/Home/Grid";

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Banner />
        <BookingInfos />
        <Grid />
      </Container>
    </>
  );
}

export default Home;
