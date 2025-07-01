import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { SectionHome } from "./components/section-home";
import { Professores } from "./components/professores";
import { Disciplinas } from "./components/disciplinas";


export function App() {
  return (
    <div id="app">
      <Header />

      <Nav />

      <SectionHome />

      <Professores />

      <Disciplinas />

    </div>
  );
}
