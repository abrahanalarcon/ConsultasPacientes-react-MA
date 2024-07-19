/* codigo real*/
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Datapa from '../Models/Datapa';
import axios from 'axios';
/*codgio orginal */
const Pacientes = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7070/api/Pacientes');
                setData(response.data);
            } catch (error) {
                setError('Error al cargar los datos. Inténtalo de nuevo más tarde.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center">Cargando...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    return (

        <div className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200"> 
            <h2 className="text-3xl font-light text-center">Pacientes</h2>
            <Link 
                  to="/agregarpa" 
                  className="absolute top-15 left-100 bg-teal-600 rounded-md py-2 px-14 text-white font-semibold shadow"
            >Agragar</Link>
            <div className="flex flex-col mt-10">
                <div className="py-2 overflow-x-auto">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Edad
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        IdDoctor
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Género
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Dirección
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Teléfono
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {data.map((paciente) => (
                                    <Datapa 
                                       key={paciente.id}
                                       paciente={paciente}
                                       
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pacientes;
