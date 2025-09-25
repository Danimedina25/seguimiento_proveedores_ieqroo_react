import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { InstruccionDePagoFormInputs } from '../interfaces/InstruccionDePagoFormInputs';
import { InputField, SelectInput } from './InputFields';

interface Props {
  onSubmit: SubmitHandler<InstruccionDePagoFormInputs>;
  data?: InstruccionDePagoFormInputs;
}

const InstruccionPagoForm: React.FC<Props> = ({ onSubmit, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InstruccionDePagoFormInputs>({
    defaultValues: data ?? {},
  });

  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const user_id = localStorage.getItem('user_id');
  const user_name = localStorage.getItem('user_name');

  useEffect(() => {
    setUserId(user_id ?? '');
    setUserName(user_name ?? '')
  }, [user_id]);

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="flex items-center gap-1 text-gray-700 transition hover:text-black"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Regresar</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 text-center flex-1">Instrucción de pago</h2>
        <span className="font-semibold invisible">Placeholder</span>
      </div>

     {/* DATOS DE LA FACTURA */}
  <div className="mb-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center flex-1">Datos de la factura</h3>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InputField
        label="Fecha factura"
        type="date"
        field="fecha_factura"
        register={register}
        rules={{ required: "La fecha de factura es obligatoria" }}
        error={errors.fecha_factura}
      />

      <InputField
        label="Folio fiscal"
        field="folio_fiscal"
        type="text"
        register={register}
        rules={{
          required: "El folio fiscal es obligatorio",
          minLength: { value: 5, message: "Debe tener al menos 5 caracteres" },
        }}
        error={errors.folio_fiscal}
      />

      <InputField
        label="Proveedor"
        field="proveedor"
        type="text"
        register={register}
        rules={{ required: "El proveedor es obligatorio" }}
        error={errors.proveedor}
      />

      <InputField
        label="Concepto de pago"
        field="concepto_pago"
        type="text"
        register={register}
        rules={{ required: "El concepto de pago es obligatorio" }}
        error={errors.concepto_pago}
      />

      <InputField
        label="Importe bruto"
        type="number"
        field="importe_bruto"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.importe_bruto}
      />

      <InputField
        label="Retención ISR"
        type="number"
        field="retencion_isr"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.retencion_isr}
      />

      <InputField
        label="Retención IVA"
        type="number"
        field="retencion_iva"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.retencion_iva}
      />

      <InputField
        label="Importe neto"
        type="number"
        field="importe_neto"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.importe_neto}
      />
    </div>
    </div>
    {/* DATOS DEL PAGO */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center flex-1">Datos del pago</h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

      <InputField
        label="Fecha de pago"
        type="date"
        field="fecha_pago"
        register={register}
        rules={{ required: "La fecha de pago es obligatoria" }}
        error={errors.fecha_pago}
      />

      <InputField
        label="Importe bruto pagado"
        type="number"
        field="importe_bruto_pagado"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.importe_bruto_pagado}
      />

      <InputField
        label="ISR pagado"
        type="number"
        field="retencion_isr_pagado"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.retencion_isr_pagado}
      />

      <InputField
        label="IVA pagado"
        type="number"
        field="retencion_iva_pagado"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.retencion_iva_pagado}
      />

      <InputField
        label="Neto pagado"
        type="number"
        field="importe_neto_pagado"
        register={register}
        rules={{
          validate: (value) => {
            if (value === '' || value === null || value === undefined) {
              return "Campo obligatorio";
            }
            if (isNaN(Number(value))) {
              return "Debe ser un número válido";
            }
            if (Number(value) < 0) {
              return "No puede ser negativo";
            }
            return true;
          },
        }}
        error={errors.importe_neto_pagado}
      />
       </div>
</div>

{/* OTROS DATOS */}
  <div className="mb-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center flex-1">Otros datos</h3>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

      <InputField
        label="Fecha de recepción"
        type="date"
        field="fecha_recepcion"
        register={register}
        rules={{ required: "La fecha de recepción es obligatoria" }}
        error={errors.fecha_recepcion}
      />

      <InputField
        label="Número de oficio"
        field="numero_oficio"
        type="text"
        register={register}
        rules={{
          required: "El número de oficio es obligatorio",
          pattern: {
            value: /^[A-Za-z0-9\-_/]+$/,
            message: "Solo letras, números y guiones",
          },
        }}
        error={errors.numero_oficio}
      />

      <InputField
        label="Identificador UR"
        field="identificador_ur"
        type="text"
        register={register}
        rules={{ required: "El identificador UR es obligatorio" }}
        error={errors.identificador_ur}
      />

      <InputField
        label="Componente"
        type="number"
        field="id_componente"
        register={register}
        rules={{
          required: "El componente es obligatorio",
          min: { value: 1, message: "Debe ser mayor a 0" },
        }}
        error={errors.id_componente}
      />

      <InputField
        label="Contrato"
        field="contrato"
        type="text"
        register={register}
        rules={{ required: "El número de contrato es obligatorio" }}
        error={errors.contrato}
      />

    <SelectInput
      label="Estatus"
      field="estatus"
      register={register}
      rules={{ required: "El estatus es obligatorio" }}
      error={errors.estatus}
      options={[
        { label: "Selecciona", value: "" },
        { label: "Pendiente", value: "pendiente" },
        { label: "Aprobado", value: "aprobado" },
        { label: "Rechazado", value: "rechazado" },
      ]}
    />
    </div>
  </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-700"
        >
          Guardar instrucción
        </button>
      </div>
    </form>
  );
};

export default InstruccionPagoForm;
