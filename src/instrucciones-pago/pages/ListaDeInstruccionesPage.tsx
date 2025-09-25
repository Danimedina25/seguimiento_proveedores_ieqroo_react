import React, { useEffect } from 'react';
import { Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSolicitudes } from '../hooks/useSolicitudes';

const ListaDeInstruccionesPage = () => {
  const navigate = useNavigate();
  const { loading, error, doSolicitudes } = useSolicitudes();
  const getSolicitudes = async () => {
    const data = await doSolicitudes();
    console.log('prueba', data);
  };
  useEffect(() => {
    getSolicitudes();
  }, []);

  const datosFacturas = [
    {
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },
    {
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },{
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },{
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },{
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },{
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },{
      id: 1,
      fecha_factura: '2024-06-06',
      folio_fiscal: 'A1F2B3C4D5',
      proveedor: 'Hotel Reforma SA de CV',
      concepto_pago: 'Hospedaje durante comisión en CDMX',
      importe_bruto: 7500,
      retencion_isr: 750,
      retencion_iva: 1200,
      importe_neto: 5550,
      fecha_pago: '2024-06-10',
      importe_bruto_pagado: 7500,
      retencion_isr_pagado: 750,
      retencion_iva_pagado: 1200,
      importe_neto_pagado: 5550,
      fecha_recepcion: '2024-06-07',
      numero_oficio: 'OF-2024-001',
      identificador_ur: 'FIN-101',
      id_componente: 1,
      contrato: 'CT-2024-001',
      estatus: 'pagado',
    },
    {
      id: 2,
      fecha_factura: '2024-06-13',
      folio_fiscal: 'X9Y8Z7W6V5',
      proveedor: 'Hotel Central SA de CV',
      concepto_pago: 'Hospedaje para campaña en Guadalajara',
      importe_bruto: 3600,
      retencion_isr: 360,
      retencion_iva: 576,
      importe_neto: 2664,
      fecha_pago: '2024-06-16',
      importe_bruto_pagado: 3600,
      retencion_isr_pagado: 360,
      retencion_iva_pagado: 576,
      importe_neto_pagado: 2664,
      fecha_recepcion: '2024-06-14',
      numero_oficio: 'OF-2024-002',
      identificador_ur: 'MKT-102',
      id_componente: 2,
      contrato: 'CT-2024-002',
      estatus: 'pendiente',
    },
  ];
  
  const formatearFecha = (fecha: string) => {
    const [a, m, d] = fecha.split('-');
    return `${d}/${m}/${a}`;
  };
  

  const nuevaSolicitud = () => {
    navigate('/solicitudes/ministracion/nueva');
  };

  return (
    <div className="flex flex-col min-h-screen p-8">
  {/* Header fijo arriba */}
  <div className="mb-4 flex items-center justify-between flex-shrink-0">
    <h1 className="text-3xl font-medium text-gray-800">Instrucciones de pago</h1>
  </div>

  {/* Contenedor scrollable para la tabla */}
  <div className="flex-1 overflow-auto rounded-md">
    <div className="overflow-x-auto max-h-[75vh] overflow-y-auto rounded-md">
      <table className="min-w-max overflow-hidden rounded-lg bg-white shadow-sm border-collapse">
        <thead className="bg-black text-amber-50">
          <tr>
            {[
              'ID',
              'Fecha Factura',
              'Proveedor',
              'Concepto de Pago',
              'Importe Bruto',
              'Fecha de Pago',
              'Neto Pagado',
              'Número de Oficio',
              'Componente',
              'Contrato',
              'Estatus',
              'Opciones',
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datosFacturas.map((f, idx) => (
            <tr key={f.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4">{f.id}</td>
              <td className="px-6 py-4">{formatearFecha(f.fecha_factura)}</td>
              <td className="px-6 py-4">{f.proveedor}</td>
              <td className="px-6 py-4">{f.concepto_pago}</td>
              <td className="px-6 py-4">${f.importe_bruto.toLocaleString()}</td>
              <td className="px-6 py-4">{formatearFecha(f.fecha_pago)}</td>
              <td className="px-6 py-4">${f.importe_neto_pagado.toLocaleString()}</td>
              <td className="px-6 py-4">{f.numero_oficio}</td>
              <td className="px-6 py-4">{f.id_componente}</td>
              <td className="px-6 py-4">{f.contrato}</td>
              <td className="px-6 py-4 capitalize">{f.estatus}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => {}}
                  className="flex items-center gap-1 text-blue-700 hover:underline"
                >
                  <Eye className="h-4 w-4" /> Ver
                </button>
                <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/ruta/del/archivo.pdf"; 
                  link.download = "documento.pdf"; 
                  link.click();
                }}
                className="flex items-center gap-1 text-green-700 hover:underline"
              >
                <Download className="h-4 w-4" /> Descargar SPEI
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default ListaDeInstruccionesPage;
