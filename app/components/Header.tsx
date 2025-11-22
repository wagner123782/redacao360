"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Redação<span className="text-yellow-400">360</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-yellow-400 transition">
            Sobre
          </Link>
          <Link href="/cursos" className="hover:text-yellow-400 transition">
            Cursos
          </Link>
          <Link href="/contato" className="hover:text-yellow-400 transition">
            Contato
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-600">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="block hover:text-yellow-400">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="block hover:text-yellow-400">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/cursos" className="block hover:text-yellow-400">
                Cursos
              </Link>
            </li>
            <li>
              <Link href="/contato" className="block hover:text-yellow-400">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
