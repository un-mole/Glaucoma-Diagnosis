import React, { useState, useEffect } from "react";
import axios from "axios";

function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("/api/results");
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="bg-purple-300 grow p-8 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Diagnosis Results
        </h1>
        {results ? (
          <div>
            <p className="text-lg">{results.message}</p>
            {/* Display more results information as needed */}
          </div>
        ) : (
          <p className="text-lg text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Results;
