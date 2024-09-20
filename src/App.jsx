// Temas
import { ThemeProvider } from "styled-components";
import theme from "./_theme/theme";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import PageLayout from "./components/Protected/Protected";
import GlobalStyle from "./_theme/GlobalStyle";

// Components
import Overview from "./pages/dashboard/Overview";
import BookingActivity from "./pages/dashboard/BookingActivity";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

          <Route element={<PageLayout />}>
            <Route path="activity" element={<BookingActivity />} />
            <Route path="overview" element={<Overview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
