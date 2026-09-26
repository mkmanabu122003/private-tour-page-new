import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { htmlLangForPath } from "@/lib/htmlLang";

// index.html ships lang="en" for every page. Prerender fixes the static HTML;
// this keeps <html lang> right when the SPA navigates between languages.
const HtmlLang = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = htmlLangForPath(pathname);
  }, [pathname]);

  return null;
};

export default HtmlLang;
