import { Link } from 'react-router';

const SignInPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Iniciar Sesión</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Comienza a planear tus proyectos&nbsp;
          <span className="text-fuchsia-500 font-semibold">
            iniciando sesión en este formulario
          </span>
        </p>
      </div>
      <form
        className="flex flex-col gap-6 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-base sm:text-lg text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu email de registro"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-base sm:text-lg text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white font-bold text-lg rounded-lg transition-all duration-200 cursor-pointer"
        />
      </form>
      <nav className="flex flex-col items-center gap-2 text-center text-sm sm:text-base">
        <Link
          to="/auth/register"
          className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200"
        >
          ¿No tienes cuenta? <span className="font-semibold">Crear una</span>
        </Link>
        <Link
          to="/auth/forgot-password"
          className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200"
        >
          ¿Olvidaste tu contraseña? <span className="font-semibold">Reestablecer</span>
        </Link>
      </nav>
    </div>
  );
};

export default SignInPage;
