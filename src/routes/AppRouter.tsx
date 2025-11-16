import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import GuestGuard from '@/guards/GuestGuard';
import AuthLayout from '@/layouts/AuthLayout';
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';
import VerifyOtpPage from '@/pages/auth/VerifyOtpPage';
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage';
import ConfirmAccountPage from '@/pages/auth/ConfirmAccountPage';

const router = createBrowserRouter([
  {
    element: <Navigate to="auth/verify-otp" replace />,
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
            children: [
              { path: 'sign-in', element: <SignInPage /> },
              { path: 'sign-up', element: <SignUpPage /> },
              { path: 'verify-otp', element: <VerifyOtpPage /> },
              { path: 'reset-password', element: <ResetPasswordPage /> },
              { path: 'forgot-password', element: <ForgotPasswordPage /> },
              { path: 'confirm-account', element: <ConfirmAccountPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
