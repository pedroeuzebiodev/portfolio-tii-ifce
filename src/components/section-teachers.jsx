import Cintia from "../assets/cintia.png";
import Jefferson from "../assets/jefferson.png";
import Kelvia from "../assets/kelvia.png";

import LogoGithub from "../assets/logo-github.svg";
import LogoInstagram from "../assets/logo-instagram.svg";
import LogoLinkedin from "../assets/logo-linkedin.svg";
import LogoYoutube from "../assets/logo-youtube.svg";

export const SectionTeachers = () => {
  return (
    <section id="section-teachers">
      <div className="max-width">
        <div id="section-teachers-content" className="space-y-[1.875rem]">
          <h2 className="text-primary text-2xl lg:text-3xl font-semibold text-center">
            Professores do Curso
          </h2>

          <p className="md:text-lg lg:text-xl text-center">
            Nosso corpo docente é formado por profissionais com vasta
            experiência acadêmica e de mercado.
          </p>

          <div
            id="teachers"
            className="flex justify-center items-center gap-[1.875rem] flex-wrap lg:flex-nowrap"
          >
            <div className="teacher flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-96">
              <img src={Cintia} alt="Cintia" className="w-full max-w-32" />

              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                Cintia Reis
              </h3>

              <p className="md:text-lg lg:text-xl text-center">
                Mestre em Inovação em Tecnologias Educacionais
              </p>

              <div
                id="social-media"
                className="flex justify-center items-center gap-6 flex-wrap p-3"
              >
                <a href="#" target="_blank">
                  <img src={LogoGithub} alt="GitHub" />
                </a>
                <a
                  href="https://www.instagram.com/cintia.reis.104"
                  target="_blank"
                >
                  <img src={LogoInstagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cintia-reis-bb8b1b55"
                  target="_blank"
                >
                  <img src={LogoLinkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.youtube.com/@cintiareis1510"
                  target="_blank"
                >
                  <img src={LogoYoutube} alt="YouTube" />
                </a>
              </div>
            </div>

            <div className="teacher flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-96">
              <img
                src={Jefferson}
                alt="Jefferson"
                className="w-full max-w-32"
              />

              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                Jefferson Gurguri
              </h3>

              <p className="md:text-lg lg:text-xl text-center">
                Mestre em Ciências da Computação
              </p>

              <div
                id="social-media"
                className="flex justify-center items-center gap-6 flex-wrap p-3"
              >
                <a href="https://github.com/profgurguri" target="_blank">
                  <img src={LogoGithub} alt="GitHub" />
                </a>
                <a
                  href="https://www.instagram.com/prof.gurguri"
                  target="_blank"
                >
                  <img src={LogoInstagram} alt="Instagram" />
                </a>
                <a href="#" target="_blank">
                  <img src={LogoLinkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/@profgurguri" target="_blank">
                  <img src={LogoYoutube} alt="YouTube" />
                </a>
              </div>
            </div>

            <div className="teacher flex flex-col justify-items-start items-center gap-4 bg-secondary rounded-lg p-[1.875rem] w-full max-w-96 h-96">
              <img src={Kelvia} alt="Kelvia" className="w-full max-w-32" />

              <h3 className="text-xl lg:text-2xl font-semibold text-primary text-center">
                Kelvia Fragoso
              </h3>

              <p className="md:text-lg lg:text-xl text-center">
                Mestre em Engenharia de Telecomunicações
              </p>

              <div
                id="social-media"
                className="flex justify-center items-center gap-6 flex-wrap p-3"
              >
                <a href="#" target="_blank">
                  <img src={LogoGithub} alt="GitHub" />
                </a>
                <a
                  href="https://www.instagram.com/kelviafragoso"
                  target="_blank"
                >
                  <img src={LogoInstagram} alt="Instagram" />
                </a>
                <a
                  href="https://br.linkedin.com/in/kelvia-fragoso-8a516754"
                  target="_blank"
                >
                  <img src={LogoLinkedin} alt="LinkedIn" />
                </a>
                <a href="#" target="_blank">
                  <img src={LogoYoutube} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
