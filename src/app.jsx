import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { SectionAbout } from "./components/section-about";
import { SectionHome } from "./components/section-home";
import { SectionTeachers } from "./components/section-teachers";

export function App() {
  return (
    <div id="app">
      <Header />

      <Nav />

      <SectionHome />

      <SectionAbout />

      <SectionTeachers />
    </div>
  );
}
