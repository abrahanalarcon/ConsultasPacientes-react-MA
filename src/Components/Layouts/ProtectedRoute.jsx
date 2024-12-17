import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('auth'); // Verifica si existe el auth en localStorage

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirige al login si no está autenticado
  }

  return children; // Muestra las rutas protegidas si está autenticado
};

export default ProtectedRoute;

