import React from "react";

const Home = () => {
  return (
    <>
      <style>
        {`
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Utility Classes */
          .animated-bg {
            background: linear-gradient(-45deg, #e0f7fa, #d0e9ff, #f0f9ff, #dceeff);
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
            overflow: hidden;
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

          .glow-text {
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
          }

          /* Prevent scrollbar */
          html, body {
            overflow: hidden;
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-center h-screen animated-bg px-6 fade-in">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 blink glow-text text-center">
          Welcome to Charusat
        </h1>

        {/* Welcome Box */}
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl w-full fade-in-delay">
          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            <span className="font-medium text-blue-800">MyApp</span> is your gateway to exploring <span className="font-semibold">CHARUSAT's</span> departments and institutes like <strong>CSE</strong>, <strong>DEPSTAR</strong>, and more.
            Use the sidebar to navigate and discover academic excellence and innovation!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
