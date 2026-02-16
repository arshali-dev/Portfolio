
// export default About;





import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16"
    >
      {/* ===== Title ===== */}
      <h1 className="text-4xl font-bold text-center mb-12">
        About <span className="text-green-600">Me</span>
      </h1>

      {/* ===== Intro Card ===== */}
      <div className="bg-white border border-[#ccc] shadow-sm rounded-2xl p-8 mb-10">
        <p className="text-gray-700 leading-relaxed text-lg">
          I'm a Computer Science & Engineering graduate and a passionate
          Java Developer with a strong interest in building scalable,
          efficient, and secure backend applications. I have solid
          knowledge of Core Java, Object-Oriented Programming (OOP),
          Data Structures, and database-driven application development.
          Along with backend technologies, I also have experience in
          frontend development using modern web technologies.
          <br /><br />
          I enjoy solving real-world problems through clean, maintainable
          code and continuously learning new tools and frameworks to
          enhance my development skills.
        </p>
      </div>

      {/* ===== Grid Sections ===== */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* ===== Education ===== */}
        <div className="bg-white  border border-[#ccc] shadow rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            Education & Training
          </h2>
          <p className="text-gray-700">
            Completed B.Tech in Computer Science & Engineering with a strong
            foundation in programming, software development, and problem-solving.
          </p>
        </div>

        {/* ===== Skills ===== */}
        <div className="bg-white  border border-[#ccc] shadow rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            Skills & Expertise
          </h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Core Java & Object-Oriented Programming (OOP)</li>
            <li>Spring Framework, Hibernate & JDBC</li>
            <li>SQL & Database Management</li>
            <li>RESTful API Development</li>
            <li>HTML, CSS, JavaScript, React.js</li>
            <li>Data Structures & Algorithms</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* ===== Experience ===== */}
        {/* <div className="bg-white shadow rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            Professional Experience
          </h2>

          <p className="font-medium">
            Java Developer Intern — TechSaksham
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Duration: 1 Month
          </p>

          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Worked on Core Java, OOP, collections & exception handling</li>
            <li>Built applications using JDBC & SQL</li>
            <li>Hands-on experience with Spring & Hibernate</li>
            <li>Improved debugging and clean coding practices</li>
          </ul>
        </div> */}
        {/* ===== Experience ===== */}
<div className="bg-white border border-[#ccc] shadow rounded-2xl p-6 hover:shadow-xl transition">
  <h2 className="text-xl font-semibold text-green-600 mb-3">
    Professional Experience
  </h2>

  {/* Java Internship */}
  <p className="font-medium">
    Java Developer Intern — TechSaksham
  </p>
  <p className="text-sm text-gray-500 mb-2">
    Duration: 1 Month
  </p>

  <ul className="list-disc ml-5 space-y-2 text-gray-700 mb-4">
    <li>Worked on Core Java, OOP, collections & exception handling</li>
    <li>Built applications using JDBC & SQL</li>
    <li>Hands-on experience with Spring & Hibernate</li>
    <li>Improved debugging and clean coding practices</li>
  </ul>

  {/* PLC / SCADA Training */}
  <p className="font-medium">
    Industrial Automation Training — PLC & SCADA (Siemens)
  </p>

  <ul className="list-disc ml-5 space-y-2 text-gray-700">
    <li>
      Completed hands-on training in PLC programming using Siemens controllers
    </li>

    <li>
      Worked with SCADA systems for monitoring and control of industrial processes
    </li>

    <li>
      Gained understanding of industrial automation concepts and real-time systems
    </li>

    <li>
      Learned basics of HMI configuration and process visualization
    </li>
  </ul>
</div>


        {/* ===== Achievements ===== */}
        <div className="bg-white  border border-[#ccc] shadow rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            Achievements & Awards
          </h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Java Programming Certification — Lets Upgrade</li>
            <li>Java Development Certification</li>
            <li>Python - GUVI partnered with Google</li>
            <li>Software Development – LinkedIn</li>
            <li>SQL – IBM </li>
            <li>GitHub -  LinkedIn collab with GitHub </li>
            <li>Data Management- TCS </li>
            <li> Soft Skill – TCS </li>
            <li>School-Level Football Champion — Team Captain</li>
            <li>District-Level Volleyball Champion — 3 Times (Team Lead)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
