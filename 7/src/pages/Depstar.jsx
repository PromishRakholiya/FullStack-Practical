import React from 'react';

const Depstar = () => {
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
                    50% { opacity: 0.3; }
                }
                .fade-in {
                    animation: fadeIn 1s ease-in-out;
                }
                .fade-in-delayed {
                    animation: fadeIn 2s ease-in-out;
                }
                .blink {
                    animation: blink 1.5s infinite;
                }
                `}
            </style>

            <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-24 px-6 fade-in">
                <h1 className="text-4xl font-bold mb-4 text-blue-700 blink">
                    Welcome to DEPSTAR
                </h1>
                <p className="text-lg text-gray-700 text-center max-w-2xl mb-10 fade-in-delayed">
                    Devang Patel Institute of Advance Technology and Research (DEPSTAR) is one of CHARUSAT’s most innovative institutes,
                    offering high-quality education in modern computing disciplines.
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl fade-in-delayed">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Programs Offered</h2>
                    <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                        <a href="/cse"><li>Computer Science & Engineering (CSE)</li></a>
                        <li>Computer Engineering (CE)</li>
                        <li>Information Technology (IT)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Depstar;
