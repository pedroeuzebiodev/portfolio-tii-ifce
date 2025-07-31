export const Nav = () => {
  return (
    <nav className="bg-secondary py-[1.875rem] hidden lg:block">
      <div className="max-width">
        <div id="nav-content">
          <ul className="flex justify-center items-center gap-[1.875rem]">
            <li>
              <a
                href="#section-home"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#section-about"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#section-teachers"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Professores
              </a>
            </li>

            <li>
              <a
                href="#section-disciplines"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Disciplinas
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Mercado
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-xl font-medium hover:text-primary hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
