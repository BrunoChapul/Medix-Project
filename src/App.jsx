// Temas
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import PageLayout from "./components/PageLayout";
import GlobalStyle from "./styles/GlobalStyle";

// Components
import Overview from "./pages/Overview";
import BookingActivity from "./pages/BookingActivity";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="activity" element={<BookingActivity />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
