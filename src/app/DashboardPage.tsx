import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ieqrooLogo from '../assets/logo.png'; // Asegúrate de tener el logo en esta ruta

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- Hook para obtener la ruta actual

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const today = new Date();
  const formattedToday = today.toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const menuItems = [
    {
      to: 'lista-instrucciones-pago',
      label: 'Instrucciones de pago',
      icon: '🧾',
      match: (path: string) => path.startsWith('lista-instrucciones-pago'),
    },
    {
      to: 'instruccion-pago',
      label: 'Nueva instrucción de pago',
      icon: '🧾',
      match: (path: string) => path.startsWith('instruccion-pago'),
    },
  ];
  const [userName, setUserName] = useState('');

  const user_name = localStorage.getItem('user_name');

  useEffect(() => {
    setUserName(user_name ?? '')
  }, [user_name]);

  return (
    <div className="flex min-h-screen flex-col">
    <header className="relative flex items-center justify-between bg-white p-4 shadow">
      <img src={ieqrooLogo} alt="IEQROO Logo" className="h-10 w-auto" />
  
      <h1 className="absolute left-1/2 -translate-x-1/2 transform text-xl font-semibold text-gray-800">
        Sistema de gestión de proveedores
      </h1>
  
      <div className="flex flex-col items-end mb-4 text-sm font-normal">
      <label className="font-normal">{formattedToday}</label>
      <div>Usuario: {userName}</div>
    </div>
    </header>
  
    <div className="flex flex-1 overflow-hidden">
      <aside
        className={`shadow-lg transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        } flex-shrink-0`}
      >
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h3 className="text-lg font-semibold">Menú</h3>}
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>
  
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => {
            const isActive = item.match(location.pathname);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block rounded px-3 py-2 hover:bg-blue-200 ${
                    isActive ? 'bg-blue-300 font-semibold' : ''
                  }`}
                >
                  {collapsed ? item.icon : item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={handleLogout}
              className="w-full rounded px-3 py-2 text-left text-blue-700 hover:bg-red-200"
            >
              {collapsed ? '🚪' : 'Cerrar sesión'}
            </button>
          </li>
        </ul>
      </aside>
  
      <main className="flex-1 bg-gray-100 p-6 overflow-auto flex flex-col">
        <Outlet />
      </main>
    </div>
  </div>
  
  );
}
