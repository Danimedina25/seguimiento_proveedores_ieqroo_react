import { useState, type FormEvent } from 'react';
import logo from '../../assets/logo.png';
import { isValidEmail } from '../../shared/utils/validators';

interface LoginFormProps {
  onSubmit: (credentials: { email: string; password: string }) => void;
  loading: boolean;
  error: string;
}

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(username)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
    onSubmit({ email: username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm space-y-5 rounded-xl bg-white p-6 shadow-lg"
    >
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Sistema de control de proveedores
      </h1>
      <img src={logo} alt="Logo IEQROO" className="mx-auto mb-6 w-32" />

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        {loading ? 'Cargando...' : 'Iniciar sesión'}
      </button>
    </form>
  );
}
