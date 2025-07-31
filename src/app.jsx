import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { SectionAbout } from "./components/section-about";
import { SectionContact } from "./components/section-contact";
import { SectionDisciplines } from "./components/section-disciplines";
import { SectionHome } from "./components/section-home";
import { SectionJobMarket } from "./components/section-job-market";
import { SectionTeachers } from "./components/section-teachers";

export function App() {
  return (
    <div id="app">
      <Header />

      <Nav />

      <SectionHome />

      <SectionAbout />

      <SectionTeachers />

      <SectionDisciplines />

      <SectionJobMarket />

      <SectionContact />
    </div>
  );
}
