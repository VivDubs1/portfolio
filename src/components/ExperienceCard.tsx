"use client";
import React, { useState } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  contributions: string[];
  link?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, duration, description, contributions, link }) => {
  const [showContributions, setShowContributions] = useState(false);

  return (
    <div
      className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-900 hover:to-cyan-900 hover:text-white"
      onMouseEnter={() => setShowContributions(true)}
      onMouseLeave={() => setShowContributions(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-2xl font-bold">{role}</h2>
          <p className="text-lg font-medium">{company}</p>
        </div>
        <span className="text-md font-semibold text-gray-400">{duration}</span>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div>
        <span className="font-semibold text-yellow-400">Key Contributions</span>
        <span className="text-xs text-gray-400 ml-2">(hover to explore)</span>
      </div>
      {showContributions && (
        <div className="mt-4 bg-black bg-opacity-10 rounded-lg p-4 border border-gray-300">
          <ul className="list-disc pl-5">
            {contributions.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline font-semibold">
          Visit Website &rarr;
        </a>
      )}
    </div>
  );
};
