import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-transparent flex flex-col items-center gap-6">
        <img src="/logo.svg" alt="Logotipo UpTask" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
