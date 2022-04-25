import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./UI/Header";
import theme from "./UI/theme";
import Test from "./UI/Test";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={() => <div>HOME</div>} />
        <Route path="/services" element={() => <div>SERVICES</div>} />
        <Route
          path="/customsoftware"
          element={() => <div>CUSTOM SOFTWARE</div>}
        />
        <Route path="/mobileapps" element={() => <div>MOBILE APPS</div>} />
        <Route path="/websites" element={() => <div>WEBSITES</div>} />
        <Route path="/revolution" element={() => <div>REVOLUTION</div>} />
        <Route path="/about" element={() => <div>ABOUT</div>} />
        <Route path="/contact" element={() => <div>CONTACT</div>} />
        <Route path="/estimate" element={() => <div>ESTIMATE</div>} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
