import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/routes";

function App() {
  return <>
    <CssBaseline />
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </>
}

export default App;
