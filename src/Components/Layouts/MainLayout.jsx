
import { Routes, Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Pacientes from '../Paciente/Pacientes';
import Doctores from '../Doctor/Doctores';
import Agregardoc from '../Doctor/Agregardoc';
import Agregarpa from '../Paciente/Agregarpa';
import Paedit from '../Paciente/Paedit';
import Edit_doc from '../Doctor/Edit_doc';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="md:flex min-h-screen md:align-top">
        <Aside />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Pacientes />} />
            <Route path="/doctores" element={<Doctores />} />
            <Route path="/agregardoc" element={<Agregardoc />} />
            <Route path="/agregarpa" element={<Agregarpa />} />
            <Route path="/paedit/:id" element={<Paedit />} />
            <Route path="/doc_edit/:id" element={<Edit_doc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
