"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const SobreNos: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Sobre Nós - Redação 360° | Mais que um Curso, Somos um Projeto de Vida
        </title>
        <meta
          name="description"
          content="Conheça o Redação 360°: transformamos vidas através da educação desde 2022. Metodologia humanizada com resultados comprovados de +200 aprovados 900+ no ENEM."
        />
      </Head>

      <main className="min-h-screen bg-black p-6 relative overflow-hidden">
        {/* Fundo Animado - Mesmo estilo da homepage */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradiente principal animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-x"></div>

          {/* Gradientes móveis */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-slow delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl animate-float-medium delay-1000"></div>

          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float-particles`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 20}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Linhas de grade sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-px h-full left-1/4 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-px h-full left-1/2 animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-px h-full left-3/4 animate-pulse delay-2000"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent w-full h-px top-1/3 animate-pulse delay-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent w-full h-px top-2/3 animate-pulse delay-1500"></div>
          </div>

          {/* Efeito de brilho pulsante no centro */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Adicione o CDN do Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Cabeçalho com Logo */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              {/* Logo com fundo circular azul e efeitos */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="bg-blue-900/30 p-4 rounded-full shadow-lg backdrop-blur-sm border border-blue-800/50 w-32 h-32 flex items-center justify-center relative z-10 transition-transform duration-500 ease-in-out hover:rotate-180">
                    <Image
                      src="/LOGOCurso-removebg-preview.png"
                      alt="Redação 360°"
                      width={112}
                      height={112}
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                  {/* Efeito de brilho atrás da logo */}
                  <div className="absolute -inset-2 bg-blue-500/20 blur-lg rounded-full animate-pulse"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                Sobre o <span className="text-yellow-400">Redação 360°</span>
              </h1>

              <p className="text-gray-400 text-xl relative">
                Mais que um curso, é um projeto de vida.
                <span className="absolute -bottom-2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></span>
              </p>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="group relative block w-full rounded-2xl p-8 bg-gradient-to-r from-gray-800/80 via-gray-750/80 to-gray-800/80 text-white border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 blur-md transition-all duration-1000"></div>

              <div className="relative z-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                  Transformando <span className="text-yellow-400">Vidas</span>{" "}
                  através da Educação
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  Desde 2022, nossa missão é facilitar o acesso à universidade e
                  construir propósitos que vão além da vida acadêmica.
                </p>
              </div>
            </section>

            {/* História e Missão */}
            <section className="group relative block w-full rounded-2xl p-8 bg-gradient-to-r from-gray-800/80 via-gray-750/80 to-gray-800/80 text-white border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
              <div className="relative z-20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-history text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Nossa História
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    O <strong className="text-blue-400">Redação 360°</strong>{" "}
                    nasceu em 2022 com uma missão clara: transformar vidas
                    através da educação e facilitar o acesso à universidade,
                    construindo propósitos que se estendem para além da vida
                    acadêmica.
                  </p>
                  <p className="leading-relaxed">
                    Idealizado pela{" "}
                    <strong className="text-purple-400">
                      Professora Especialista em Redação, Edja Rafaela
                    </strong>
                    , o projeto surge com uma proposta humanizada visando
                    quebrar paradigmas e provar que todos têm condições de
                    alcançarem os melhores espaços sociais.
                  </p>
                </div>

                {/* Destaque da Missão */}
                <div className="mt-6 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl backdrop-blur-sm">
                  <blockquote className="text-xl md:text-2xl font-bold text-yellow-300 text-center italic">
                    &quot;Mais que um curso, somos um projeto de vida.&quot;
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Metodologia */}
            <section className="group relative block w-full rounded-2xl p-8 bg-gradient-to-r from-gray-800/80 via-gray-750/80 to-gray-800/80 text-white border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
              <div className="relative z-20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-graduation-cap text-green-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Nossa Metodologia
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card Ensino Humanizado */}
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-heart text-blue-400"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Ensino Humanizado
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Rompemos com a rigidez dos modelos tradicionais, adotando
                      um ensino centrado no aluno, respeitando seu ritmo e
                      individualidade.
                    </p>
                  </div>

                  {/* Card Metodologia Acessível */}
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-green-500/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-bullseye text-green-400"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Metodologia Acessível
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Acreditamos que o aprendizado eficaz não precisa ser
                      complicado. Desmistificamos a redação de forma clara e
                      objetiva.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Resultados */}
            <section className="group relative block w-full rounded-2xl p-8 bg-gradient-to-r from-gray-800/80 via-gray-750/80 to-gray-800/80 text-white border border-gray-700/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
              <div className="relative z-20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-trophy text-purple-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Resultados Comprovados
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      200+
                    </div>
                    <div className="text-xs text-gray-400">
                      Alunos Transformados
                    </div>
                  </div>
                  <div className="text-center bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      900+
                    </div>
                    <div className="text-xs text-gray-400">
                      Notas na Redação
                    </div>
                  </div>
                  <div className="text-center bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">Comprometimento</div>
                  </div>
                </div>

                <p className="text-gray-300 text-center italic">
                  &quot;A combinação de excelência técnica com suporte humano é
                  a fórmula para a alta performance.&quot;
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="group relative block w-full rounded-2xl p-8 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-white shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 transition-all duration-700 transform hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-600 to-orange-600 opacity-20 blur-lg group-hover:opacity-30 transition-all duration-1000 animate-pulse"></div>

              <div className="relative z-20 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Faça Parte dos Aprovados 900+!
                </h3>
                <p className="text-yellow-100 mb-6 text-lg">
                  Invista em um acompanhamento estratégico e humanizado que
                  maximiza suas chances de sucesso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-white text-yellow-600 hover:bg-yellow-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
                    onClick={() =>
                      (window.location.href =
                        "https://docs.google.com/forms/d/e/1FAIpQLSdIA5ANhQVvaA8Pan9tAW_wLPw6CHWrPlQdZ6SLDWKGWeUWbA/viewform")
                    }
                  >
                    Quero Ser o Próximo Aprovado
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Rodapé */}
          <div className="text-center mt-12 relative">
            <div className="text-gray-500 text-sm inline-block px-6 py-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-gray-800/30">
              © 2024 Redação 360° - Transformando vidas através da educação
              <div className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SobreNos;
