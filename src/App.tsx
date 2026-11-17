import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// The site has one page. Any other path renders the 404 page; production
// serves dist/404.html (a copy of index.html) for unknown paths.
const App = () => (
  <ErrorBoundary>
    {window.location.pathname === "/" ? <Index /> : <NotFound />}
  </ErrorBoundary>
);

export default App;
