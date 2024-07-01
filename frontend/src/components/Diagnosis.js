import React, { useState } from "react";
import "./Diagnosis.css";

function Diagnosis() {
  const [formData, setFormData] = useState({
    RL: "",
    age: "",
    ocular_pressure: "",
    MD: "",
    PSD: "",
    GHT: "",
    cornea_thickness: "",
    RNFL4mean: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setPrediction(null);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tokenResponse = await fetch("http://localhost:5000/api/token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to fetch token");
      } else {
        console.log("tokenResponse", tokenResponse);
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // console.log("accessToken",accessToken);

      const payload = {
        input_data: [
          {
            fields: [
              "RL",
              "age",
              "ocular_pressure",
              "MD",
              "PSD",
              "GHT",
              "cornea_thickness",
              "RNFL4mean",
            ],
            values: [
              [
                formData.RL,
                formData.age,
                formData.ocular_pressure,
                formData.MD,
                formData.PSD,
                formData.GHT,
                formData.cornea_thickness,
                formData.RNFL4mean,
              ],
            ],
          },
        ],
      };

      // console.log("payload",payload);

      const scoringResponse = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: accessToken,
          payload: payload,
        }),
      });

      const scoringData = await scoringResponse.json();

      if (!scoringResponse.ok) {
        throw new Error("Failed to fetch prediction" + scoringData.error);
      }

      let isGlaucoma = scoringData.predictions[0].values[0][0];
      if (isGlaucoma === 0) {
        setPrediction(
          `You do not have Glaucoma. Probability:  ${
            scoringData.predictions[0].values[0][1][1] * 100
          }`
        );
      } else {
        setPrediction(
          `You may have Glaucoma. Probability:  ${
            scoringData.predictions[0].values[0][1][1] * 100
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setPrediction({ error: error.message });
    }
  };

  return (
    <div className="diagnosis bg-purple-300 grow p-8 flex justify-center md:flex-row flex-col items-center ">
      <div className="bg-white p-6 rounded-lg shadow-2xl shadow-gray-700 md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-900">
          Glaucoma Diagnosis
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">RL:</label>
              <select
                name="RL"
                value={formData.RL}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Eye</option>
                <option value="OD">Right Eye (OD)</option>
                <option value="OS">Left Eye (OS)</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">Ocular Pressure:</label>
              <input
                type="number"
                name="ocular_pressure"
                value={formData.ocular_pressure}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">MD:</label>
              <input
                type="number"
                name="MD"
                value={formData.MD}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">PSD:</label>
              <input
                type="number"
                name="PSD"
                value={formData.PSD}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">GHT:</label>
              <input
                type="text"
                name="GHT"
                value={formData.GHT}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">Cornea Thickness:</label>
              <input
                type="number"
                name="cornea_thickness"
                value={formData.cornea_thickness}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1">RNFL4.mean:</label>
              <input
                type="number"
                name="RNFL4mean"
                value={formData.RNFL4mean}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Predict
          </button>
        </form>
        {prediction && (
          <div className="prediction-result">
            <h2>Prediction Result</h2>
            <div className="prediction-content">
              {prediction.error ? (
                <p>Error: {prediction.error}</p>
              ) : (
                <pre>{JSON.stringify(prediction, null, 2)}</pre>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diagnosis;
