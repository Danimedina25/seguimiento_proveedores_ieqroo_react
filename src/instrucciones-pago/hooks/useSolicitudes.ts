import { useState, useCallback } from 'react';
import { getSolicitudes } from '../services/solicitudesService';
import axios from 'axios';

export function useSolicitudes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const doSolicitudes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSolicitudes();
      return data;
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          setError('No tienes permisos para acceder.');
        } else if (err.response?.status === 401) {
          setError('Credenciales inválidas.');
        } else {
          setError('Ocurrió un error al intentar iniciar sesión.');
        }
      } else {
        setError('Error desconocido.');
      }
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, doSolicitudes };
}
