import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import { useRoute } from "./route";

const pages = {
  home: Home,
  about: About,
  team: Team,
  services: Services,
  gallery: Gallery,
  contact: Contact,
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
      <main id="main">
        <Page />
      </main>
      <Footer />
    </>
  );
}
