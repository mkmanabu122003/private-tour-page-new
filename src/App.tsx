import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
