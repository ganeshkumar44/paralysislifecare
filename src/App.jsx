import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import { useRoute } from "./route";

const pages = {
  home: Home,
  about: About,
  team: Team,
  services: Services,
  gallery: Gallery,
  contact: Contact,
  faq: Faq,
  terms: Terms,
  privacy: Privacy,
};

export default function App() {
  const route = useRoute();
  const Page = pages[route.page];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page={route.page} />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
    </>
  );
}
