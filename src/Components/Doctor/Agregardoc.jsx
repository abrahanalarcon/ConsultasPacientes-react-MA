import  { useState } from 'react';
import axios from 'axios';


const Agregardoc = () => {
    const [nombre, setNombre] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [hospital, setHospital] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7070/api/Doctors', {
                nombre,
                especialidad,
                hospital
            });

            // Redirigir al componente de doctores
            window.location.href = '/doctores';
        } catch (error) {
            setError('Error al agregar el doctor. Inténtalo de nuevo más tarde.');
            console.error('Error adding doctor:', error);
        }
    };

    const allFieldsFilled = () => {
        return nombre.trim() !== '' && especialidad.trim() !== '' && hospital.trim() !== '';
    };

    return (
        <div className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Agregar Doctor</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Nombre Doctor"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="especialidad">Especialidad</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="especialidad"
                                    name="especialidad"
                                    type="text"
                                    placeholder="Especialidad"
                                    value={especialidad}
                                    onChange={(e) => setEspecialidad(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hospital">Hospital</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="hospital"
                                    name="hospital"
                                    type="text"
                                    placeholder="Hospital"
                                    value={hospital}
                                    onChange={(e) => setHospital(e.target.value)}
                                />
                            </div>

                            {error && <div className="text-red-600">{error}</div>}

                            <input
                                type="submit"
                                className={`bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold ${!allFieldsFilled() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                value="Agregar Doctor"
                                disabled={!allFieldsFilled()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agregardoc;