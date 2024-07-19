import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pacientes from './Components/Paciente/Pacientes';
import Doctores from './Components/Doctor/Doctores';
import Aside from './Components/Aside/Aside';
import './App.css'
import Agregardoc from './Components/Doctor/Agregardoc';
import Agregarpa from './Components/Paciente/Agregarpa';

import Paedit from './Components/Paciente/Paedit';
import Edit_doc from './Components/Doctor/Edit_doc';

function App() {
  
  return (
    
    <Router>
     <div className="min-h-screen bg-gray-200">
      <div className="md:flex min-h-screen md:align-top">
        <Aside />
        <Routes >
          <Route path="/" element={<Pacientes />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/agregardoc" element={<Agregardoc />} />
          <Route path="/agregarpa" element={<Agregarpa />} />
          <Route path="/paedit/:id" element={<Paedit />} />
          <Route path="/doc_edit/:id" element={<Edit_doc />} />
        </Routes>
      </div>
    </div>
  </Router>
    
  )
}

export default App
