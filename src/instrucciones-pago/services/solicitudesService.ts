import axiosInstance from '../../../src/shared/config/axiosInstance';

export async function getSolicitudes() {
  const response = await axiosInstance.get('/solicitudes/usuario');
  return response.data;
}
