import type { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import type { InstruccionDePagoFormInputs } from './InstruccionDePagoFormInputs';

export interface InputFieldProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  type: string;
  step?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: any;
  required?: boolean;
  disabled?: boolean;
}

interface Option {
  label: string;
  value: string;
}

export interface FormSelectProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  options: Option[];
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: any;
  required?: boolean;
  disabled?: boolean;
}

export interface TextAreaFieldProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: any;
  required?: boolean;
  disabled?: boolean;
}
