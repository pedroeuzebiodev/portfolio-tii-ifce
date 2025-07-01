
export const Disciplinas = () => {
  const semesters = [
    {
      semester: '1° Semestre',
      color: '#00ff88',
      subjects: [
        'Ambientação EaD',
        'Desenvolvimento Web I',
        'Informática Básica',
        'Inglês Instrumental',
        'Lógica de Programação',
        'Lógica Matemática',
        'Sistemas Operacionais'
      ]
    },
    {
      semester: '2° Semestre',
      color: '#00cc6a',
      subjects: [
        'Banco de Dados I',
        'Desenvolvimento Web II',
        'Empreendedorismo',
        'Engenharia de Software I',
        'Programação Orientada a Objetos',
        'Projeto Integrador I',
        'Redes de Computadores'
      ]
    },
    {
      semester: '3° Semestre',
      color: '#009952',
      subjects: [
        'Banco de Dados II',
        'Desenvolvimento Web III',
        'Engenharia de Software II',
        'Programação para Dispositivos Móveis',
        'Projeto Integrador II',
        'Segurança da Informação'
      ]
    }
  ]

  return (
    <section id="disciplinas" className="py-16 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#00ff88] mb-4">Disciplinas do Curso</h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-12">
          O curso está estruturado em 3 semestres com disciplinas teóricas e práticas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {semesters.map((semester, index) => (
            <div
              key={index}
              className={`relative rounded-xl border border-[#333] overflow-hidden bg-[#1a1a1a] shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{
                borderColor: semester.color,
                animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: semester.color }}
              />

              <div className="bg-gradient-to-br from-[#2d2d2d] to-[#333] p-6 sm:p-4">
                <h3
                  className="uppercase font-bold text-lg tracking-wide"
                  style={{ color: semester.color }}
                >
                  {semester.semester}
                </h3>
              </div>

              <div className="text-left px-6 py-6 sm:px-5 sm:py-5">
                {semester.subjects.map((subject, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center mb-4 p-2 rounded transition-all duration-300 hover:bg-[rgba(0,255,136,0.05)] hover:pl-3 group"
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                      style={{
                        backgroundColor: semester.color,
                        boxShadow: `0 0 0 transparent`
                      }}
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  )
}

