import React from 'react';
import FormularioInstruccionPagoComponent from '../components/FormularioInstruccionPagoComponent';
import type { SubmitHandler } from 'react-hook-form';
import type { InstruccionDePagoFormInputs } from '../interfaces/InstruccionDePagoFormInputs';
import { useLocation, useParams } from 'react-router-dom';

const InstruccionDePagoPage: React.FC = () => {
    const onSubmit: SubmitHandler<InstruccionDePagoFormInputs> = (data) => {
        console.log("prueba")
    };
  
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
  
    return (
        <div className="flex-1 overflow-auto rounded-md">
            <div className="overflow-x-auto max-h-[87vh] overflow-y-auto rounded-md">
                <div className="mb-4 flex items-center justify-between flex-shrink-0">
                    <h1 className="text-3xl font-medium text-gray-800">Nueva Instrucción de Pago</h1>
                </div>      
                <FormularioInstruccionPagoComponent onSubmit={onSubmit} />
            </div>
        </div>
    );
  };
  
  export default InstruccionDePagoPage;
  