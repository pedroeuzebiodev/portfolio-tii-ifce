import { CircleCheck } from "lucide-react";
import HomemNoComputador from "../assets/homem-no-computador.png";

export const SectionJobMarket = () => {
  return (
    <section id="section-job-market">
      <div className="max-width">
        <div id="section-job-market-content">
          <h2 className="font-semibold text-2xl lg:text-3xl text-primary text-center mb-[1.875rem]">
            Mercado de Trabalho
          </h2>

          <div
            id="section-job-market-content-texts"
            className="flex flex-col gap-12 items-center justify-center lg:flex-row lg:items-start lg:gap-24"
          >
            <div id="section-home-content-texts" className="space-y-[1.875rem]">
              <p className="md:text-lg lg:text-xl">
                O mercado de trabalho para profissionais de Informática para
                Internet está em constante expansão, com diversas oportunidades
                em empresas de tecnologia, agências digitais, startups e até
                mesmo no setor público. <br /> <br /> De acordo com dados
                recentes, a demanda por desenvolvedores web tem crescido
                significativamente nos últimos anos, com salários competitivos e
                possibilidade de trabalho remoto.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <CircleCheck size={32} className="text-primary" />
                  <p className="md:text-lg lg:text-xl">
                    Alta demanda por profissionais qualificados
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <CircleCheck size={32} className="text-primary" />
                  <p className="md:text-lg lg:text-xl">
                    Possibilidade de trabalho remoto e internacional
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <CircleCheck size={32} className="text-primary" />
                  <p className="md:text-lg lg:text-xl">
                    Remuneração acima da média do mercado
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <CircleCheck size={32} className="text-primary" />
                  <p className="md:text-lg lg:text-xl">
                    Oportunidades para empreendedorismo digital
                  </p>
                </div>
              </div>
            </div>

            <img
              src={HomemNoComputador}
              alt="HomemNoComputador"
              className="w-full max-w-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
