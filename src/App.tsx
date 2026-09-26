import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import HtmlLang from "./components/HtmlLang";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <HtmlLang />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
