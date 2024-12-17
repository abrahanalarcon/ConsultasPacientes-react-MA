import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authProvider from '../../services/authProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      await authProvider.login({ username, password }); 
      navigate('/pacientes'); 
    } catch (err) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      {/* Sección de la Imagen */}
      <div className="hidden md:block">
        <img
          src="https://i.pinimg.com/736x/7b/8d/87/7b8d87a38afadf01c88605f79a75f580.jpg"
          alt="Persona"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Sección del Formulario */}
      <div className="flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">¡Bienvenido a Chastain!</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Campo Nombre de Usuario */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="correo@dgjp.gob.do"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            {/* Campo Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            {/* Mensaje de Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Botón de Inicio de Sesión */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Iniciar sesión
              </button>
            </div>

            {/* Enlace de Olvidar Contraseña */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm text-green-500 hover:underline"
              >
                ¿Has olvidado tu contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
