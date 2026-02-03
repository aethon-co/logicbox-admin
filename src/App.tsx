import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginLogixbox from './pages/auth/LoginLogicbox';
import LoginTradetalk from './pages/auth/LoginTradetalk';
import HomeLogicbox from './pages/Home/HomeLogicbox';
import HomeTradetalk from './pages/Home/HomeTradetalk';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <ProtectedRoute tokenKey="token_logicbox" redirectPath="/login-logixbox" />,
    children: [
      {
        path: "/home-logicbox",
        element: <HomeLogicbox />,
      },
    ]
  },
  {
    element: <ProtectedRoute tokenKey="token_tradetalk" redirectPath="/login-tradetalk" />,
    children: [
      {
        path: "/home-tradetalk",
        element: <HomeTradetalk />,
      },
    ]
  },
  {
    path: "/login-logixbox",
    element: <LoginLogixbox />,
  },
  {
    path: "/login-tradetalk",
    element: <LoginTradetalk />,
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
