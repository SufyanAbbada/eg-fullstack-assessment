import Welcome from "./Welcome/Welcome";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    </div>
  );
}

export default App;
