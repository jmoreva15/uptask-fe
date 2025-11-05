import { createBrowserRouter } from 'react-router';
import GuestGuard from '@/guards/GuestGuard';
import AuthLayout from '@/layouts/AuthLayout';
import SignInPage from '@/pages/auth/SignInPage';

const router = createBrowserRouter([
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
