import { useState, useCallback } from "react";
import { login } from "../services/authService";
import axios from "axios";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { ApiResponse } from "../../shared/types/ApiResponse";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const doLogin = useCallback(async (credentials: LoginRequest) => {
    setLoading(true);
    setError(null);
  
    try {
      const data = await login(credentials);
      return data;
    } catch (err: unknown) {
      console.error("Login error:", err);
  
      if (axios.isAxiosError(err)) {
        console.log("err", err)
        const status = err.response?.status;
        const backendMessage = err.response?.data?.error;
  
        switch (status) {
          case 401:
            setError(backendMessage || "Credenciales inválidas.");
            break;
          case 403:
            setError(backendMessage || "No tienes permisos para acceder.");
            break;
          case 404:
            setError(backendMessage || "Servicio no disponible o no encontrado.");
            break;
          case 500:
            setError(backendMessage || "Error interno del servidor.");
            break;
          default:
            setError(backendMessage || "Ocurrió un error al iniciar sesión.");
            break;
        }
      } else {
        setError("Error de red o inesperado.");
      }
  
      return null;
    } finally {
      setLoading(false);
    }
  }, []);
  

  return { loading, error, doLogin };
}
