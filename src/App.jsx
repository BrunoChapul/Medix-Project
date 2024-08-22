// Temas
import { ThemeProvider } from "styled-components";
import theme from "./_assets/scripts/theme";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import PageLayout from "./containers/PageLayout";
import GlobalStyle from "./_assets/styles/GlobalStyle";

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
