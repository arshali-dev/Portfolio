import React from "react";
import profile from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaJava,
  FaJsSquare,
} from "react-icons/fa";
import { SiLeetcode, SiSpring, SiHibernate } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT TEXT ================= */}
        <div>
          <p className="text-2xl font-bold mb-2 text-gray-700">
            Welcome To My Portfolio
          </p>

          {/* ===== Typing Title ===== */}
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            I am{" "}
            <span className="text-red-600">
              <ReactTyped
                strings={["Programmer", "Java Developer"]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1500}
                loop
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Passionate and detail-oriented Java Full Stack Developer with
            hands-on experience building scalable web applications and RESTful
            services. Proficient in Java, Spring Boot, Hibernate, React, MySQL,
            and MongoDB. Strong foundation in Object-Oriented Programming (OOP),
            API development, and translating business requirements into
            production-ready solutions. Experienced in developing responsive
            frontends, secure backend systems, and database-driven applications.
            Comfortable working in Agile environments and continuously learning
            modern cloud-native technologies.
          </p>

          {/* ================= AVAILABLE + TECH SIDE BY SIDE ================= */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-6">

            {/* -------- Available on -------- */}
            <div>
              <h3 className="font-semibold mb-3">
                Available on
              </h3>

              <div className="flex space-x-5 text-3xl">

                <a
                  href="https://www.linkedin.com/in/arsh-ali-b18039256/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/arshali-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://leetcode.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  <SiLeetcode />
                </a>

                <a
                  href="https://www.instagram.com/arsh786_ali"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

              </div>
            </div>

            {/* -------- Tech Logos (Added on Right) -------- */}
            <div>
              <h3 className="font-semibold mb-3">
                Tech Stack
              </h3>

              <div className="flex space-x-4">

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
                  <FaJsSquare className="text-yellow-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
                  <FaReact className="text-blue-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
                  <FaJava className="text-red-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
                  <SiSpring className="text-green-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
                  <SiHibernate className="text-yellow-700 text-2xl" />
                </div>

              </div>
            </div>

          </div>

          {/* ================= ORIGINAL TECH STACK TEXT (UNCHANGED) ================= */}
          <div>
            <h3 className="font-semibold mb-2">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white rounded shadow">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-white rounded shadow">
                React.js
              </span>
              <span className="px-3 py-1 bg-white rounded shadow">
                Java
              </span>
              <span className="px-3 py-1 bg-white rounded shadow">
                Hibernate
              </span>
              <span className="px-3 py-1 bg-white rounded shadow">
                Spring
              </span>
              <span className="px-3 py-1 bg-white rounded shadow">
                SQL
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-full">
            <img
              src={profile}
              alt="profile"
              className="
              border-2 border-gray-700
                w-110 h-110 object-cover rounded-full shadow-2xl
                transition-transform duration-500 ease-in-out
                hover:scale-110
              "
            />
          </div>
          {/* <div className="overflow-hidden rounded-full bg-white">
  <img
    src={profile}
    alt="profile"
    className="
      border-2 border-gray-700
      w-80 h-80 object-contain rounded-full shadow-2xl
      transition-transform duration-500 ease-in-out
      hover:scale-110
    "
  />
</div> */}

        </div>

      </div>
    </section>
  );
}







