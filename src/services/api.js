import axios from "axios";


const api = axios.create({
    baseURL: 'https://localhost:7070/api', // URL base de tu API
  });
  
  export default api; // Exporta api como default
  
  // Ejemplo: Método para obtener doctores
  export const getDoctors = async () => {
    try {
      const response = await api.get('/Doctors');
      return response.data; // Retorna los datos de la API
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  };