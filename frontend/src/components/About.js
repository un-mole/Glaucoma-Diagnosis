import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-purple-300 grow p-8 flex justify-center md:flex-row flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-2xl shadow-gray-700 md:w-1/2 w-full">
        <div className="text-3xl font-bold mb-4 text-center text-purple-900">
          About Glaucoma Diagnosis Tool
        </div>
        <p className="text-lg mb-4">
          This tool uses a machine learning model to predict the likelihood of
          glaucoma based on various medical parameters.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-purple-900">Features</h2>
          <ul className="list-disc pl-4">
            <li>Utilizes state-of-the-art machine learning techniques</li>
            <li>
              Based on data from a reputable study by Kim SJ et al. (2017)
            </li>
            <li>Supports early detection and diagnosis</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-purple-900">References</h2>
          <p>
            Kim SJ et al. (2017), "Development of Machine Learning Models for
            Diagnosis of Glaucoma."
          </p>
        </div>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-blue-600 underline hover:font-bold hover:text-xl"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default About;
