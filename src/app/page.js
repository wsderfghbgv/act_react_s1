'use client';

import Usuario from './components/Usuarios';

export default function Home() {
  const usuarios = [
    { nombre: 'Ana García', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Juan Pérez', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'María López', edad: 28, ciudad: 'Valencia' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 p-4 border border-gray-200 shadow-sm rounded-lg">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}