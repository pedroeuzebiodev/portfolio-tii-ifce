import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { SectionAbout } from "./components/section-about";
import { SectionHome } from "./components/section-home";

export function App() {
  return (
    <div id="app">
      <Header />

      <Nav />

      <SectionHome />

      <SectionAbout />
    </div>
  );
}
