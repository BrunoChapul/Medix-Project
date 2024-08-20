import Layout from "./components/Global/Layout";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
