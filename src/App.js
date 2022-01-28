import "./App.css";

import Navigation from "./containers/navigation/index";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Navigation />
    </div>
    </>
  );
}

export default App;
