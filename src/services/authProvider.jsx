// authProvider.js

const authProvider = {
    // Login: Simula el inicio de sesión con un usuario y asigna un rol.
    login: ({ username }) => {
      const users = {
        joedoe: { role: 'admin' },
        janedoe: { role: 'user' },
      };
  
      // Si el usuario existe, guarda la información en localStorage.
      if (users[username]) {
        localStorage.setItem('auth', JSON.stringify(users[username]));
        return Promise.resolve();
      }
  
      // Si el usuario no existe, retorna un error.
      return Promise.reject(new Error('Usuario o contraseña incorrectos'));
    },
  
    // Logout: Elimina la información de autenticación de localStorage.
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
  
    // checkAuth: Verifica si el usuario está autenticado.
    checkAuth: () => {
      return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
  
    // getPermissions: Obtiene los permisos basados en el rol del usuario.
    getPermissions: () => {
      const auth = JSON.parse(localStorage.getItem('auth'));
      return auth ? Promise.resolve(auth.role) : Promise.reject();
    },
  
    // Función adicional para verificar si el usuario tiene un rol específico (por ejemplo, 'admin')
    checkRole: (role) => {
      const auth = JSON.parse(localStorage.getItem('auth'));
      if (auth && auth.role === role) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Acceso denegado'));
    },
  };
  
  export default authProvider;
  
  