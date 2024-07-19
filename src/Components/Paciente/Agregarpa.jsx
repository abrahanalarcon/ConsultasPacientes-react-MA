import { Link, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Agregarpa = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [idDoctor, setidDoctor] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [error, setError] = useState(null);
    const [doctores, setDoctores] = useState([]);

    useEffect(() => {
        const fetchDoctores = async () => {
            try {
                const response = await axios.get('https://localhost:7070/api/Doctors');
                setDoctores(response.data);
            } catch (error) {
                console.error('Error al mostar doctores', error);
            }
        };

        fetchDoctores();
    }, []);

   
    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        const response = await axios.post('https://localhost:7070/api/Pacientes', {
        nombre,
        telefono,
        idDoctor,
        edad,
        genero,
        direccion
        });

        // Redirigir al componente de doctores
        window.location.href = '/';
    } catch (error) {
        setError('Error al agregar el doctor. Inténtalo de nuevo más tarde.');
        console.error('Error adding doctor:', error);
    }
};



     const allFieldsFilled = () => {
         return (
        nombre.trim() !== '' &&
        telefono.trim() !== '' &&
        idDoctor.trim() !== '' &&
        edad.trim() !== '' &&
        genero.trim() !== '' &&
        direccion.trim() !== ''
         );
     };

    return (
        <div className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Agregar Paciente</h2>

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
                                    placeholder="Nombre Paciente"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="telefono"
                                    name="telefono"
                                    type="tel"
                                    placeholder="Teléfono Paciente"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorId">Doctor</label>
                                <select
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="doctorId"
                                    name="doctorId"
                                    value={idDoctor}
                                    onChange={(e) => setidDoctor(e.target.value)}
                                >
                                    <option value="">Selecciona un doctor</option>
                                    {doctores.map(doctor => (
                                        <option key={doctor.id} value={doctor.id}>{doctor.nombre}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">Edad</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="edad"
                                    name="edad"
                                    type="text"
                                    placeholder="Edad Paciente"
                                    value={edad}
                                    onChange={(e) => setEdad(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">Género</label>
                                <select
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="genero"
                                    name="genero"
                                    value={genero}
                                    onChange={(e) => setGenero(e.target.value)}
                                >
                                    <option value="">Selecciona un género</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">Dirección</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="direccion"
                                    name="direccion"
                                    type="text"
                                    placeholder="Dirección Paciente"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                            </div>

                            {error && <div className="text-red-600">{error}</div>}

                            <input
                                type="submit"
                                className={`bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold ${!allFieldsFilled() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                value="Agregar Paciente"
                                disabled={!allFieldsFilled()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agregarpa;
