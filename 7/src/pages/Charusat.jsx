import React from "react";

const Charusat = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }

          .fade-in {
            animation: fadeIn 1s ease-out;
          }

          .fade-in-delay {
            animation: fadeIn 1.6s ease-out;
          }

          .blink {
            animation: blink 1.5s infinite;
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 pt-24 fade-in">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 blink">
          Welcome to CHARUSAT
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-12 leading-relaxed fade-in-delay">
          Charotar University of Science and Technology (CHARUSAT) is a premier private university in Gujarat, India,
          renowned for excellence in engineering, management, sciences, and health education.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full fade-in-delay">
          {[
            {
              title: "Engineering Programs",
              description:
                "CHARUSAT offers top-tier engineering degrees through CSPIT and DEPSTAR, with specializations in CSE, IT, EC, and more.",
            },
            {
              title: "Campus Life",
              description:
                "A vibrant, green campus with modern hostels, smart classrooms, sports facilities, and over 50 student clubs.",
            },
            {
              title: "Research & Innovation",
              description:
                "Dedicated to excellence in research in AI, robotics, IoT, bioinformatics, and more with global collaborations.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center max-w-xl fade-in-delay">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to explore more?</h2>
          <p className="text-gray-600 mb-6">
            Dive deeper into CHARUSAT's programs, research, and vibrant community by visiting the official site.
          </p>
          <a
            href="https://www.charusat.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
          >
            Visit Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Charusat;
