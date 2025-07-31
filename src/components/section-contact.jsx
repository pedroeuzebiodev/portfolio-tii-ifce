import { Mail, MapPin, Phone } from "lucide-react";
import Notebook from "../assets/notebook.png";

export const SectionContact = () => {
  return (
    <section id="section-contact">
      <div className="max-width">
        <div id="section-contact-content">
          <h2 className="font-semibold text-2xl lg:text-3xl text-primary text-center mb-[1.875rem]">
            Contato
          </h2>

          <div
            id="section-contact-content-texts"
            className="flex flex-col gap-12 items-center justify-center lg:flex-row lg:items-start lg:gap-24"
          >
            <div className="space-y-[1.875rem]">
              <p className="md:text-lg lg:text-xl">
                Entre em contato conosco para mais informações sobre o curso,
                processo seletivo e oportunidades.
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <MapPin size={32} className="text-primary inline mr-3" />
                  <span className="md:text-lg lg:text-xl">
                    Endereço: Av. Ouvidor Vitóriano Soares Barbosa, 160 -
                    Sanharão, Baturité - CE, 62760-000
                  </span>
                </div>

                <div>
                  <Phone size={32} className="text-primary inline mr-3" />
                  <span className="md:text-lg lg:text-xl">
                    Telefone: (85) 3347-9150
                  </span>
                </div>

                <div>
                  <Mail size={32} className="text-primary inline mr-3" />
                  <span className="md:text-lg lg:text-xl">
                    E-mail: cca.baturite@ifce.edu.br
                  </span>
                </div>
              </div>
            </div>

            <form className="bg-secondary w-full max-w-lg rounded-lg p-[1.875rem]">
              <fieldset>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="name"
                      className="md:text-lg lg:text-xl font-medium"
                    >
                      Nome:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-foreground text-background p-2 rounded-sm outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="md:text-lg lg:text-xl font-medium"
                    >
                      E-mail:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-foreground text-background p-2 rounded-sm outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="tel"
                      className="md:text-lg lg:text-xl font-medium"
                    >
                      Telefone:
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      className="bg-foreground text-background p-2 rounded-sm outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="message"
                      className="md:text-lg lg:text-xl font-medium"
                    >
                      Mensagem:
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="bg-foreground text-background p-2 rounded-sm outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary rounded-lg px-6 py-3 md:text-lg lg:text-xl font-medium"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
