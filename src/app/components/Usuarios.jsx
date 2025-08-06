'use client';

import React from 'react';

function Usuario({ usuario, saludar }) {
  return (
    <div className="bg-white p-4 m-2 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Nombre: {usuario.nombre}</h2>
      <p className="text-gray-700">Edad: {usuario.edad} años</p>
      <p className="text-gray-700">Ciudad: {usuario.ciudad}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition-colors"
        onClick={() => saludar(usuario.nombre)}
      >
        Saludar
      </button>
    </div>
  );
}

export default Usuario;