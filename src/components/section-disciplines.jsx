export const SectionDisciplines = () => {
  return (
    <section id="section-disciplines">
      <div className="max-width">
        <div id="section-disciplines-content" className="space-y-[1.875rem]">
          <h2 className="text-primary text-2xl lg:text-3xl font-semibold text-center">
            Disciplinas do Curso
          </h2>

          <p className="md:text-lg lg:text-xl text-center">
            O curso está estruturado em 3 semestres com disciplinas teóricas e
            práticas.
          </p>

          <div
            id="disciplines"
            className="flex justify-center items-center gap-[1.875rem] flex-wrap lg:flex-nowrap p-[1.875rem]"
          >
            <div className="discipline flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-[26rem]">
              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                1° Semestre
              </h3>

              <div className="flex justify-center items-center flex-col gap-4">
                <p className="md:text-lg lg:text-xl text-center">
                  Ambientação EaD
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Desenvolvimento Web I
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Informática Básica
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Inglês Instrumental
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Lógica de Programação
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Lógica Matemática
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Sistemas Operacionais
                </p>
              </div>
            </div>

            <div className="discipline flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-[26rem]">
              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                2° Semestre
              </h3>

              <div className="flex justify-center items-center flex-col gap-4">
                <p className="md:text-lg lg:text-xl text-center">
                  Banco de Dados I
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Desenvolvimento Web II
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Empreendedorismo
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Engenharia de Software I
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Programação Orientada a Objetos
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Projeto Integrador I
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Redes de Computadores
                </p>
              </div>
            </div>

            <div className="discipline flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-[26rem]">
              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                3° Semestre
              </h3>

              <div className="flex justify-center items-center flex-col gap-4">
                <p className="md:text-lg lg:text-xl text-center">
                  Banco de Dados II
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Desenvolvimento Web III
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Engenharia de Software II
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Programação para Dispositivos Móveis
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Projeto Integrador II
                </p>

                <p className="md:text-lg lg:text-xl text-center">
                  Segurança da Informação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
