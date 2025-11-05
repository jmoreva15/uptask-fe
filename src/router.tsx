import { createBrowserRouter, Navigate } from 'react-router';
import GuestGuard from '@/guards/GuestGuard';
import AuthLayout from '@/layouts/AuthLayout';
import SignInPage from '@/pages/auth/SignInPage';

const router = createBrowserRouter([
  {
    element: <Navigate to="auth/sign-in" replace />,
    index: true,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'auth',
            children: [{ path: 'sign-in', element: <SignInPage /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
