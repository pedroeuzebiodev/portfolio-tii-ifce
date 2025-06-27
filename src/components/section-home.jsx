import Notebook from "../assets/notebook.png";

export const SectionHome = () => {
  return (
    <section id="section-home" className="py-12">
      <div className="max-width">
        <div
          id="section-home-content"
          className="flex flex-col gap-12 items-center justify-center md:flex-row md:items-start md:gap-24"
        >
          <div id="section-home-content-texts" className="space-y-[1.875rem]">
            <h1 className="text-primary text-3xl font-bold md:text-4xl">
              Técnico em Informática <br /> para Internet
            </h1>

            <p className="text-xl md:text-2xl">
              Prepara o aluno para desenvolver softwares, aplicativos e soluções
              web, além de atuar em áreas como desenvolvimento de sites,
              comércio eletrônico e marketing digital.
            </p>

            <a
              href="#"
              className="px-6 py-3 bg-secondary rounded-lg text-lg font-medium md:text-xl"
            >
              Saiba mais
            </a>
          </div>

          <img
            src={Notebook}
            alt="Notebook"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
