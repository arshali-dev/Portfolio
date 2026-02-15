// import React from "react";
// import { projects } from "../data/projectsData";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-100">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My Projects
//       </h2>

//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//         {projects.map((project, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
//           >
//             <h3 className="text-xl font-semibold mb-3">
//               {project.title}
//             </h3>

//             <p className="text-gray-600 mb-6">
//               {project.description}
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-4">

//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 Live
//               </a>

//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
//               >
//                 GitHub
//               </a>

//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }






import React from "react";
import { projects } from "../data/projectsData";

export default function Projects() {

  // 🔥 Limit words function
  const limitWords = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    <section id="projects" className="py-24 bg-gray-100">
      
      {/* ===== Title ===== */}
      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-green-600">Projects</span>
      </h2>

      {/* ===== Cards ===== */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl overflow-hidden
              shadow-lg hover:shadow-2xl
              transform hover:-translate-y-2
              transition duration-300
              flex flex-col
            "
          >

            {/* ===== Project Image Placeholder ===== */}
            <div className="h-44 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-xl font-semibold">
              {project.title}
            </div>

            {/* ===== Content ===== */}
            <div className="p-6 flex flex-col flex-grow">

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* 🔥 LIMITED DESCRIPTION */}
              <p className="text-gray-600 mb-6 flex-grow">
                {limitWords(project.description, 18)}
              </p>

              {/* ===== Buttons ===== */}
              <div className="flex gap-4 mt-auto">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 text-center
                    px-4 py-2
                    bg-green-600 text-white
                    rounded-lg font-semibold
                    hover:bg-green-700
                    transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 text-center
                    px-4 py-2
                    bg-gray-900 text-white
                    rounded-lg font-semibold
                    hover:bg-black
                    transition
                  "
                >
                  Code
                </a>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
