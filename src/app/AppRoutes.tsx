import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import DashboardPage from './DashboardPage'; // Este es ahora un layout con <Outlet />
import type { JSX } from 'react';
import { isTokenExpired } from '../shared/utils/validators';
import ListaDeInstruccionesPage from '../instrucciones-pago/pages/ListaDeInstruccionesPage';
import InstruccionDePagoPage from '../instrucciones-pago/pages/InstruccionDePagoPage';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('auth'); // Asegúrate que aquí guardas el JWT, no solo un flag

  const isAuth = token && !isTokenExpired(token);

  return isAuth ? children : <Navigate to="/login" replace />;
}

interface PublicRouteProps {
  children: JSX.Element;
}

function PublicRoute({ children }: PublicRouteProps) {
  const token = localStorage.getItem('auth');
  const isAuth = token && !isTokenExpired(token);

  return isAuth ? <Navigate to="/dashboard" replace /> : children;
}

const AppRoutes = () => {
  const token = localStorage.getItem('auth');
  const isAuth = token && !isTokenExpired(token);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      >
         <Route path="lista-instrucciones-pago" element={<ListaDeInstruccionesPage />} />
         <Route path="instruccion-pago" element={<InstruccionDePagoPage />} />
      </Route>
      <Route
        path="*"
        element={isAuth ? <Navigate to="/" replace /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
