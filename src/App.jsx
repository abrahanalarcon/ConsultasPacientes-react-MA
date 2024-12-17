import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import MainLayout from './Components/Layouts/MainLayout';
import ProtectedRoute from './Components/Layouts/ProtectedRoute';

function App() {
  const isAuthenticated = localStorage.getItem('auth');

  return (
    <Router>
      <Routes>
        {/* Redirige la ruta raíz al login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Ruta pública para el login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rutas protegidas */}
        <Route 
          path="/*" 
          element={
            isAuthenticated ? (
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

