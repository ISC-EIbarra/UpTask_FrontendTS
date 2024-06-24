import { Link } from 'react-router-dom';

export default function DashboardView() {
  return (
    <>
      <h1 className="text-4xl font-black">Mis Proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-4">
        Maneja y Administra tus proyectos
      </p>
      <nav className="my-4">
        <Link
          to="/projects/create"
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        >
          Nuevo proyecto
        </Link>
      </nav>
    </>
  );
}
