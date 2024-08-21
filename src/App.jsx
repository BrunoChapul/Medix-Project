// Temas
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

// Containers
import PageLayout from "./components/PageLayout";
import GlobalStyle from "./styles/GlobalStyle";

// Components
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <GlobalStyle />
        <Home />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
