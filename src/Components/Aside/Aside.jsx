import { useState } from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  const [activeOption, setActiveOption] = useState(null); // Controla la opción activa

  const toggleSubmenu = (option) => {
    setActiveOption(activeOption === option ? null : option); // Activa o desactiva el submenú
  };

  // Datos del menú con opciones y subopciones con links
  const menuData = [
    { title: "Servicio al cliente", suboptions: [
        { title: "Solicitud Pension", link: "/doctores" },
        { title: "Consulta de Solitud", link: "/pacientes" },
        { title: "Registro de Certificacion", link: "/doctores" },
        { title: "Consulta de Certificacion", link: "/pacientes" },
        { title: "Solicitud de Carta", link: "/doctores" },
        { title: "Cuadre por Usuario", link: "/pacientes" },
        { title: "Cuadre por General", link: "/doctores" },
        { title: "Remision de Expediente", link: "/pacientes" }
      ]
    },
    { title: "Cuentas Individuales", suboptions: [
        { title: "Recepción", link: "/subopcion2-1" },
        { title: "Cuentas Electronicas", link: "/subopcion2-1" },
        { title: "Pendiente de Compilacion", link: "/subopcion2-1" },
        { title: "Proceso de Calulo", link: "/subopcion2-1" },
        { title: "Remision Expediente", link: "/subopcion2-1" },
        { title: "Compilacion", link: "/subopcion2-1" }
      ]
    },
    { title: "Revericacion", suboptions: [
        { title: "Recepcion", link: "/subopcion3-1" },
        { title: "Proceso", link: "/subopcion3-2" },
        { title: "Archivo", link: "/subopcion3-3" },
        { title: "Unidad Exp Incompleto", link: "/subopcion3-3" },
        { title: "Remision Expedientes", link: "/subopcion3-3" }
      ]
    },
    { title: "Control de Calidad", suboptions: [
      { title: "Recepcion", link: "/subopcion3-1" },
      { title: "Revision de Cuentas", link: "/subopcion3-2" },
      { title: "Correcion de Calculos", link: "/subopcion3-3" },
      { title: "Registros de Datos", link: "/subopcion3-3" },
      { title: "Remision Expedinetes", link: "/subopcion3-3" }
    ] 
  },
    { title: "Otrogamiento", suboptions: [
        { title: "Recepcion", link: "/subopcion5-1" },
        { title: "Procesamiento", link: "/subopcion5-2" },
        { title: "Remision Expediente", link: "/subopcion5-2" },
        { title: "Corresion de Cuentas", link: "/subopcion5-2" }
      ]
    },
    { title: "Mi cuenta", suboptions: [
      { title: "Cerrar Sesion", link: "/" },
      
    ]
  },
  ];

  return (
    <aside className="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-gradient-to-b bg-white border border-gray-300 rounded-lg shadow-md p-4">
      {/* Logo */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
        <img
          src="https://cdn.kyruus.com/pmc-customer-static-assets/nghs/images/1.0/mobile-logo-001.gif"
          alt="Consultas Pacientes"
          className="w-36 h-auto"
        />
      </div>

      {/* Menú */}
      <nav className="mt-8">
        {/* Opciones del menú */}
        {menuData.map((menu, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg mb-1">
            {/* Título de la opción del menú */}
            <button
              onClick={() => toggleSubmenu(`opcion${index + 1}`)}
              className="flex items-center justify-between px-4 py-2 text-gray-600 bg-white border border-gray-200 w-full hover:bg-gray-100 cursor-pointer"
            >
              {menu.title}
              <span
                className={`transform transition-transform inline-block ${
                  activeOption === `opcion${index + 1}` ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {/* Submenús */}
            {activeOption === `opcion${index + 1}` && menu.suboptions.length > 0 && (
              <ul className="mt-2 space-y-1 bg-gray-100 rounded-lg p-2">
                {menu.suboptions.map((suboption, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={suboption.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-all"
                    >
                      {suboption.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
