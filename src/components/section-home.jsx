import Notebook from "../assets/notebook.png";

export const SectionHome = () => {
  return (
    <section id="section-home">
      <div className="max-width">
        <div
          id="section-home-content"
          className="py-12 flex flex-col gap-12 items-center justify-center"
        >
          <div id="section-home-content-texts" className="space-y-8">
            <h1 className="text-primary text-3xl font-bold">
              Técnico em Informática <br /> para Internet
            </h1>

            <p className="text-xl">
              Prepara o aluno para desenvolver softwares, aplicativos e soluções
              web, além de atuar em áreas como desenvolvimento de sites,
              comércio eletrônico e marketing digital.
            </p>

            <a
              href="#"
              className="px-6 py-3 bg-secondary rounded-lg text-lg font-medium"
            >
              Saiba mais
            </a>
          </div>

          <img src={Notebook} alt="Notebook" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};
