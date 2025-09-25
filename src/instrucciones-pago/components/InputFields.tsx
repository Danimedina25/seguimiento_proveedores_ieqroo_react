import type { FieldValues } from 'react-hook-form';
import type {
  FormSelectProps,
  InputFieldProps,
  TextAreaFieldProps,
} from '../interfaces/InputsFieldsProps';

export const InputField = <T extends FieldValues>({
  label,
  field,
  type,
  register,
  rules,
  error,
  step,
  disabled,
}: InputFieldProps<T>) => (
  <div>
    <label className="mb-1 block font-medium">{label}</label>
    <input
      type={type}
      step={step}
      {...register(field, rules)}
      disabled={disabled}
      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
    />
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
);

export const TextAreaField = <T extends FieldValues>({
  label,
  field,
  register,
  error,
  rules,
  disabled,
}: TextAreaFieldProps<T>) => (
  <div className="md:col-span-2">
    <label className="mb-1 block font-medium">{label}</label>
    <textarea
      {...register(field, rules)}
      disabled={disabled}
      className="h-24 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
    />
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
);

export const SelectInput = <T extends FieldValues>({
  label,
  field,
  options,
  register,
  rules,
  error = false,
  disabled,
}: FormSelectProps<T>) => (
  <div>
    <label className="mb-1 block font-medium">{label}</label>
    <select
      disabled={disabled}
      {...register(field, rules)}
      className="w-full rounded-md border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
);
