
export const Professores = () => {
  const professors = [
    {
      id: 1,
      name: "Prof. Cintia Reis",
      title: "Mestre em Inovação em Tecnologias Educacionais",
      image: "src/assets/Cintia.png",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 2,
      name: "Prof. Jefferson Gurguri",
      title: "Mestre em Ciências da Computação",
      image: "src/assets/Jeff.png",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 3,
      name: "Prof. Kelvia Fragoso",
      title: "Mestre em Engenharia de Telecomunicações",
      image: "src/assets/Kelvia.png",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <section id="professores" className="py-16 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#00ff88] mb-4">
          Professores do Curso
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-12">
          Nosso corpo docente é formado por profissionais com vasta experiência
          acadêmica e de mercado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {professors.map((professor) => (
            <div
              key={professor.id}
              className="relative bg-[#2d2d2d] p-8 rounded-xl border border-[#444] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,136,0.2)] hover:border-[#00ff88]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff88] to-[#00cc6a]"></div>

              <div className="w-28 h-28 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#00ff88]">
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      professor.name
                    )}&size=150&background=00ff88&color=000000&bold=true`;
                  }}
                />
              </div>

              <h3 className="text-[#00ff88] text-xl font-bold mb-2">
                {professor.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {professor.title}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={professor.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="src/assets/redes/logo-github.png"
                    alt="Github"
                    className="w-8 h-8 rounded-full hover:scale-110 transition"
                  />
                </a>
                <a
                  href={professor.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="src/assets/redes/logo-linkedin.png"
                    alt="Github"
                    className="w-8 h-8 rounded-full hover:scale-110 transition"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
