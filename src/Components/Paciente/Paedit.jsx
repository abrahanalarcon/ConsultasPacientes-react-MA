
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Paedit = () => {
    const { id } = useParams();
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [idDoctor, setidDoctor] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [error, setError] = useState(null);
    const [doctores, setDoctores] = useState([]);
    const [pacienteId, setId] = useState('');

    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const response = await axios.get(`https://localhost:7070/api/Pacientes/${id}`);
                const paciente = response.data;
                setId(paciente.id); // Establecer el id del paciente
                setNombre(paciente.nombre);
                setTelefono(paciente.telefono);
                setidDoctor(paciente.doctorId);
                setEdad(paciente.edad);
                setGenero(paciente.genero);
                setDireccion(paciente.direccion);
            } catch (error) {
                setError('revisa los datos ,falló la importacion a la API');
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPaciente();
    }, [id]);

    const updatePaciente = async () => {
        try {
            
            const pacienteData = {
                id,
                nombre,
                telefono,
                idDoctor,
                edad,
                genero,
                direccion
            };

            delete pacienteData.idDoctorNavigation;
            
            const response = await axios.put(`https://localhost:7070/api/Pacientes/${id}`, pacienteData);
    
            // Redirigir al componente de pacientes después de editar el paciente
            window.location.href = '/';
        } catch (error) {
            setError('Error al actualizar el paciente. Porblema con la Api');
            console.error('Error updating patient:', error);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Llamar a la función para actualizar el paciente
        await updatePaciente();
    };

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

    const allFieldsFilled = () => {
        return (
            nombre && telefono && idDoctor && genero && direccion &&
            nombre.trim() !== '' &&
            telefono.trim() !== '' &&
            idDoctor.trim() !== '' &&
            edad.toString().trim() !== '' && // Convertir a cadena de texto antes de trim()
            genero.trim() !== '' &&
            direccion.trim() !== ''
        );
    };

    return (
        <div className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Editar Paciente</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">ID</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id"
                                    name="id"
                                    type="text"
                                    placeholder="ID Paciente"
                                    value={pacienteId} // Usar el estado pacienteId como valor
                                    onChange={(e) => setId(e.target.value)} // No permitir que el usuario cambie el ID
                                    disabled // Deshabilitar la entrada de texto para el ID
                                />
                            </div>
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
                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">telefono</label>
                         <input 
                              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="telefono"
                               name="telefono"
                               type="text"
                               placeholder="000-000-000"
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
                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Edad</label>
                         <input 
                              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="edad"
                               name="edad"
                               type="text"
                               placeholder="33"
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
                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Direccion</label>
                         <input 
                              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="direccion"
                               name="direccion"
                               type="text"
                               placeholder="Saint Tropez"
                               value={direccion}
                               onChange={(e) => setDireccion(e.target.value)}
                          />
                        </div>

                            
                            
                            
                            

                            

                           

                            {error && <div className="text-red-600">{error}</div>}

                            <input
                                type="submit"
                                className={`bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold ${!allFieldsFilled() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                value="Guardar Cambios"
                                disabled={!allFieldsFilled()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paedit;
