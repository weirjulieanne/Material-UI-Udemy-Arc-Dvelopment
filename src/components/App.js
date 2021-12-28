import Router from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./Header";
import theme from "./UI/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <p>Hello</p>
    </ThemeProvider>
  );
}
export default App;
