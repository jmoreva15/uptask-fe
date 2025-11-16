import { Link } from '@/components/ui/link';

function ConfirmAccountPage() {
  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Cuenta Confirmada</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Tu cuenta ha sido confirmada.&nbsp;
          <span className="text-primary font-semibold">Ahora puedes iniciar sesión.</span>
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <p className="text-gray-700 text-base sm:text-lg">
          Ingresa con tus credenciales para continuar
        </p>
        <Link
          to="/auth/sign-in"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 hover:text-white w-full p-3 text-white font-bold text-lg rounded-lg cursor-pointer text-center"
        >
          Ir al Login
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/sign-up">
          ¿Aún no tienes cuenta? <span className="font-semibold">Crear una</span>
        </Link>
        <Link to="/auth/forgot-password">
          ¿Olvidaste tu contraseña? <span className="font-semibold">Reestablecer</span>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmAccountPage;
