import axiosInstance from '../../shared/config/axiosInstance';
import type { LoginRequest } from '../interfaces/LoginRequest';

export async function login(request: LoginRequest) {
  const response = await axiosInstance.post('/auth/login', request);
  return response.data;
}
