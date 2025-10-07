import React from "react";

const CSE = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .fade-in {
            animation: fadeIn 1.2s ease-in-out;
          }
          .fade-in-delay {
            animation: fadeIn 1.8s ease-in-out;
          }
          .blink {
            animation: blink 1.5s infinite;
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 pt-24 px-6 fade-in">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 blink">
          Welcome to CSE Department
        </h1>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-12 leading-relaxed fade-in-delay">
          The Department of Computer Science and Engineering at CHARUSAT is committed to developing highly skilled professionals 
          with expertise in emerging technologies and industry-driven knowledge.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full fade-in-delay">
          {[
            {
              title: "Cutting-Edge Curriculum",
              desc: "Courses in AI, Machine Learning, Cybersecurity, Blockchain, and Cloud Computing aligned with industry standards.",
            },
            {
              title: "Advanced Labs",
              desc: "Equipped with state-of-the-art computing facilities, IoT labs, and high-performance research clusters.",
            },
            {
              title: "Student Achievements",
              desc: "Regular national-level hackathon winners, research paper publications, and active developer community.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center max-w-xl fade-in-delay">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Want to be part of the future?</h2>
          <p className="text-gray-600 mb-4">
            Learn more about the CSE department, research groups, internships, and placement opportunities.
          </p>
          <a
            href="https://charusat.ac.in/depstar/cse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow hover:shadow-md"
          >
            Explore More
          </a>
        </div>
      </div>
    </>
  );
};

export default CSE;
