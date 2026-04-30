"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#166954]/85 backdrop-blur-md border-b border-sand/10"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="#top" className="flex items-center">
          <Image
            src="/img/photos/ChillNessWhite.png"
            alt="Chill'Ness logo"
            width={60}
            height={30}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em] text-sand/80">
          <li>
            <Link href="#about" className="hover:text-sunset transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#performers" className="hover:text-sunset transition">
              Performers
            </Link>
          </li>
          <li>
            <Link href="#activities" className="hover:text-sunset transition">
              Activities
            </Link>
          </li>
          <li>
            <Link href="#aftermovie" className="hover:text-sunset transition">
              Aftermovie
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className="group relative inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-sunset/70 text-sunset font-bold hover:bg-sunset hover:text-[#166954] transition-all text-xs md:text-sm uppercase tracking-[0.2em]"
        >
          Reach Us
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </nav>
    </header>
    {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
