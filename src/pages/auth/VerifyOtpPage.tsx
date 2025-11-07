import { OTPInput } from 'input-otp';
import { Link } from 'react-router';

const VerifyOtpPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Verificar Código</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Ingresa el código que enviamos a tu correo&nbsp;
          <span className="text-fuchsia-500 font-semibold">para continuar</span>
        </p>
      </div>

      <form
        className="flex flex-col items-center gap-8 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        noValidate
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <label htmlFor="email" className="font-medium text-base sm:text-lg text-gray-700">
            Código de Verificación
          </label>
        </div>

        <OTPInput
          maxLength={6}
          containerClassName="flex justify-center gap-3 sm:gap-4"
          render={({ slots }) => (
            <div className="flex justify-center gap-3 sm:gap-4">
              {slots.map((slot, idx) => (
                <div
                  key={idx}
                  className={`w-10 sm:w-12 h-12 sm:h-14 flex items-center justify-center rounded-lg border text-xl sm:text-2xl font-semibold transition-all bg-gray-50 text-gray-800 
                    ${
                      slot.isActive
                        ? 'border-fuchsia-500 ring-1 ring-fuchsia-500'
                        : 'border-gray-300'
                    }`}
                >
                  {slot.char !== null ? slot.char : <span className="text-gray-400">•</span>}
                </div>
              ))}
            </div>
          )}
        />

        <input
          type="submit"
          value="Verificar Código"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white font-bold text-lg rounded-lg transition-all duration-200 cursor-pointer"
        />
      </form>

      <nav className="flex flex-col items-center gap-2 text-center text-sm sm:text-base">
        <Link
          to="/auth/sign-in"
          className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200"
        >
          ¿Ya tienes cuenta? <span className="font-semibold">Iniciar Sesión</span>
        </Link>
        <Link
          to="/auth/forgot-password"
          className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200"
        >
          ¿No recibiste el código? <span className="font-semibold">Reenviar</span>
        </Link>
      </nav>
    </div>
  );
};

export default VerifyOtpPage;
