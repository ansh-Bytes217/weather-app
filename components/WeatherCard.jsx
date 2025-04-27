import React from 'react';

function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-80 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{weather.location}</h2>
      <p className="text-5xl text-blue-500 mb-2">{weather.temperature}</p>
      <p className="text-xl text-gray-600">{weather.condition}</p>
    </div>
  );
}

export default WeatherCard;
