import Banner from "../components/Banner";
import Container from "../components/Global/Container";
import TopBar from "../components/Topbar/TopBar";

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Banner />
      </Container>
    </>
  );
}

export default Home;
