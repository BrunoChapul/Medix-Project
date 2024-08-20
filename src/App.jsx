import Layout from "./components/Global/Layout";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Home />
    </Layout>
  );
}

export default App;
