
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Datadoc = ({ doctor,onDelete}) => {
    const {  id, nombre, especialidad,hospital } = doctor;
    

    const handleDelete = async () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este paciente?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7070/api/Doctors/${id}`);
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
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{especialidad}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{hospital}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <Link to={`/doc_edit/${id}`} className="text-teal-600 hover:text-teal-900 mr-5">Editar</Link>
                 <button onClick={handleDelete} className="text-red-600 hover:text-red-900">Eliminar</button>
           </td>
        </tr>
    );
}

export default Datadoc;
