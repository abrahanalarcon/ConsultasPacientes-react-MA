
import { Link, useLocation } from 'react-router-dom';

const Aside = () => {

  const location = useLocation(); 
  const pathname = location.pathname; 
  return (
   
      <aside className="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-teal-600 px-5 py-10">
      <h1 className="uppercase text-white tracking-wide text-2xl font-bold mt-2">Consultas Pacientes</h1>
      <nav className="mt-8">
          <Link 
              to="/" 
              className={`px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400 ${pathname === '/' ? 'bg-teal-700' : ''}`}
          >
              Pacientes
          </Link>
          <Link 
             to="/doctores" 
             className={`px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400 ${pathname === '/doctores' ? 'bg-teal-700' : ''}`}
           >
             Doctores
             </Link>
          

      </nav>
  </aside>
  );
}

export default Aside;
