import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Datapa = ({ paciente, onDelete }) => {
    const { id, nombre, edad, idDoctor, genero, direccion, telefono } = paciente;
    const [nombreDoctor, setNombreDoctor] = useState('');

    useEffect(() => {
        const fetchDoctorName = async () => {
            try {
                const response = await axios.get(`https://localhost:7070/api/Doctors/${idDoctor}`);
                const doctor = response.data;
                setNombreDoctor(doctor.nombre);
            } catch (error) {
                console.error('Error al obtener el nombre del doctor:', error);
            }
        };

        fetchDoctorName();
    }, [idDoctor]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este paciente?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7070/api/Pacientes/${id}`);
                onDelete(id);
            } catch (error) {
                console.error('Error al eliminar el paciente:', error);
            }
        }
        window.location.reload();
    };

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{nombre}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{edad}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{nombreDoctor}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{genero}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{direccion}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{telefono}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <Link to={`/paedit/${id}`} className="text-teal-600 hover:text-teal-900 mr-5">Editar</Link>
                <button onClick={handleDelete} className="text-red-600 hover:text-red-900">Eliminar</button>
            </td>
        </tr>
    );
}

export default Datapa;
