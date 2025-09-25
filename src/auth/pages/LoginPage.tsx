import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useLogin } from '../hooks/useLogin';

export default function LoginPage() {
  const { loading, error, doLogin } = useLogin();
  const navigate = useNavigate();
  const handleLogin = async (credentials: { email: string; password: string }) => {
    const data = await doLogin(credentials);
    if (data.success) {
      loginSuccess(data.data.token, data.data.userId, data.data.name);
    }
  };

  const loginSuccess = (token: string, user_id: string, user_name: string) => {
    localStorage.setItem('auth', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('user_name', user_name);
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} loading={loading} error={error ?? ''} />
    </div>
  );
}
