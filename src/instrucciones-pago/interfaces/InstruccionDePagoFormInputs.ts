export interface InstruccionDePagoFormInputs {
  fecha_factura: string;
  folio_fiscal: string;
  proveedor: string;
  concepto_pago: string;
  importe_bruto: number;
  retencion_isr: number;
  retencion_iva: number;
  importe_neto: number;
  fecha_pago: string;
  importe_bruto_pagado: number;
  retencion_isr_pagado: number;
  retencion_iva_pagado: number;
  importe_neto_pagado: number;
  fecha_recepcion: string;
  numero_oficio: string;
  identificador_ur: string;
  id_componente: number;
  contrato: string;
  estatus: string;
}
