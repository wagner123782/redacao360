"use client";

// import Header from "./components/Header";

import React from "react";
import Image from "next/image";

export default function HomePage() {
  const links = [
    {
      name: "Sobre o Redação 360°",
      description: "Conheça nossa metodologia e história",
      url: "/sobre",
      icon: "fa-solid fa-circle-info",
    },

    {
      name: "Área de Matrícula",
      description: "Garanta sua vaga agora",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdIA5ANhQVvaA8Pan9tAW_wLPw6CHWrPlQdZ6SLDWKGWeUWbA/viewform",
      icon: "fa-solid fa-graduation-cap",
      featured: true,
    },
    {
      name: "WhatsApp",
      description: "Fale diretamente conosco",
      url: "https://api.whatsapp.com/send/?phone=558191937317&text&type=phone_number&app_absent=0",
      icon: "fa-brands fa-whatsapp",
    },
    {
      name: "Instagram",
      description: "Acompanhe nosso conteúdo",
      url: "https://www.instagram.com/redacao360",
      icon: "fa-brands fa-instagram",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black p-6 relative overflow-hidden">
        {/* Fundo Animado - Gradiente em Movimento */}
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

        {/* Adicione o CDN do Font Awesome no seu HTML */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Cabeçalho com brilho */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Logo com fundo circular azul e efeitos */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="bg-blue-900/30 p-4 rounded-full shadow-lg backdrop-blur-sm border border-blue-800/50 w-50 h-50 flex items-center justify-center relative z-10 transition-transform duration-500 ease-in-out hover:rotate-180">
                    <Image
                      src="/LOGOCurso-removebg-preview.png"
                      alt="Redação 360°"
                      width={200}
                      height={200}
                      className="w-50 h-50 object-contain"
                    />
                  </div>
                  {/* Efeito de brilho atrás da logo */}
                  <div className="absolute -inset-2 bg-blue-500/20 blur-lg rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="relative perspective-1000">
                <h1 className="text-5xl font-bold mb-6 relative z-10 transform-style-preserve-3d hover:rotate-x-12 transition-transform duration-700">
                  <span className="text-white relative inline-block">
                    Redação
                    <span className="absolute inset-0 text-gray-400 transform translate-z-[-10px] -translate-y-1 blur-sm opacity-60">
                      Redação
                    </span>
                  </span>{" "}
                  <span className="text-yellow-400 relative inline-block">
                    360°
                    <span className="absolute inset-0 text-yellow-600 transform translate-z-[-8px] -translate-y-0.5 blur opacity-70">
                      360°
                    </span>
                  </span>
                </h1>
              </div>
              jk
              {/* Efeito de brilho atrás do título */}
              <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
            </div>

            <p className="text-gray-400 text-xl relative">
              Mais que um curso, é um projeto de vida.
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></span>
            </p>
          </div>
          {/* Lista de Links com Efeito 3D e Brilho */}
          <div className="space-y-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`group relative block w-full rounded-2xl p-6 font-semibold transition-all duration-700 transform ${
                  link.featured
                    ? "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-white shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60"
                    : "bg-gradient-to-r from-gray-800/80 via-gray-750/80 to-gray-800/80 text-white border border-gray-700/50 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                } hover:-translate-y-3 hover:scale-105`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Efeito de brilho animado para botões featured */}
                {link.featured && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-600 to-orange-600 opacity-20 blur-lg group-hover:opacity-30 transition-all duration-1000 animate-pulse"></div>
                    {/* Partículas de brilho */}
                    <div className="absolute top-2 right-4 w-3 h-3 bg-white rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-bounce"></div>
                  </>
                )}

                {/* Efeito de brilho para botões normais */}
                {!link.featured && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 blur-md transition-all duration-1000"></div>
                  </>
                )}

                {/* Brilho de borda sutil */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${
                    link.featured
                      ? "from-yellow-400 to-orange-400"
                      : "from-blue-400 to-purple-400"
                  } opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}
                ></div>

                <div className="relative flex items-center space-x-5 z-20">
                  {/* Ícone com efeito 3D e brilho */}
                  <div
                    className={`relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all duration-700 group-hover:scale-110 ${
                      link.featured
                        ? "bg-white text-yellow-600 shadow-lg group-hover:shadow-yellow-400/50"
                        : "bg-gray-700 text-blue-400 shadow-md group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-blue-400/30"
                    } group-hover:rotate-3`}
                  >
                    <i className={link.icon}></i>
                    {/* Brilho no ícone */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                        link.featured ? "bg-yellow-200" : "bg-blue-200"
                      }`}
                    ></div>
                  </div>

                  {/* Texto */}
                  <div className="flex-1 text-left">
                    <div
                      className={`text-xl font-bold transition-all duration-500 ${
                        link.featured
                          ? "text-white group-hover:text-yellow-100 drop-shadow-sm"
                          : "text-white group-hover:text-blue-300 drop-shadow-sm"
                      } group-hover:tracking-wide`}
                    >
                      {link.name}
                    </div>
                    <div
                      className={`text-sm mt-1 transition-all duration-500 ${
                        link.featured
                          ? "text-yellow-100/80 group-hover:text-yellow-50"
                          : "text-gray-400 group-hover:text-gray-300"
                      } group-hover:tracking-wider`}
                    >
                      {link.description}
                    </div>
                  </div>

                  {/* Seta com efeito 3D e brilho */}
                  <div
                    className={`relative text-2xl transition-all duration-700 group-hover:translate-x-3 ${
                      link.featured
                        ? "text-yellow-100 group-hover:text-white"
                        : "text-gray-400 group-hover:text-blue-400"
                    } group-hover:scale-125`}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                    {/* Brilho na seta */}
                    <div
                      className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                        link.featured ? "bg-yellow-400" : "bg-blue-400"
                      } blur-sm`}
                    ></div>
                  </div>
                </div>

                {/* Efeito de profundidade com brilho */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-700 -z-10 ${
                    link.featured
                      ? "bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-600 opacity-80 group-hover:opacity-100 group-hover:blur-xs"
                      : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80 group-hover:opacity-90"
                  }`}
                ></div>

                {/* Efeito de brilho pulsante sutil */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
                    link.featured
                      ? "bg-yellow-200/10 animate-pulse"
                      : "bg-blue-200/5"
                  }`}
                ></div>
              </a>
            ))}
          </div>

          {/* Rodapé com brilho */}
          <div className="text-center mt-16 relative">
            <div className="text-gray-500 text-sm inline-block px-6 py-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-gray-800/30">
              © 2024 Redação 360° - Transformando redações <br />
              site feito por{" "}
              <span className="text-blue-400 font-semibold">wagner</span>
              {/* Linha de brilho sutil */}
              <div className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
