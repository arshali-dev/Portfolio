import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* LEFT SIDE — Profile + Name */}
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h1 className="text-xl font-bold">
                Arsh <span className="text-green-500">Ali</span>
              </h1>
              <p className="text-sm font-semibold text-red-600">
                Java Developer
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>

            {/* 🔥 VIEW CV (Preview + Download option) */}
            <a
              href="/ArshCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                bg-green-600 text-white
                px-4 py-2 rounded-lg
                font-semibold
                hover:bg-green-700
                transition
              "
            >
              View CV
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-100 shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-8 text-xl font-medium px-8 mt-6">

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {/* 🔥 VIEW CV BUTTON (Mobile) */}
          <a
              href="/ArshCV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="
              bg-green-600 text-white
              px-4 py-2 rounded-lg
              text-center
              font-semibold
              hover:bg-green-700
              transition
            "
          >
            View CV
          </a>

        </div>
      </div>
    </>
  );
}
