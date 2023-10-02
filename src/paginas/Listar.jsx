import React from 'react'
import Tabla from '../componets/Tabla'
import Tabla2 from '../componets/Tabla2'
import Tabla3 from '../componets/Tabla3'

const Listar = () => {
    return (
      <div>
        <h1 className="font-black text-4xl text-gray-500">Clientes</h1>
        <hr className="my-4" />
        <p className="mb-8">
        </p>
        <Tabla />
        
        <h1 className="font-black text-4xl text-gray-500">Tecnicos</h1>
        <hr className="my-4" />
        <p className="mb-8">
        </p>
        <Tabla2 />
        
        <h1 className="font-black text-4xl text-gray-500">Tickets</h1>
        <hr className="my-4" />
        <p className="mb-8">
        </p>
        <Tabla3 />
      </div>
    );
}

export default Listar;
