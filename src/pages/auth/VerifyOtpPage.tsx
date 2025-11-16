import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Link } from '@/components/ui/link';
import { InputOTP } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';

const verifyOtpSchema = z.object({
  otp: z.string().min(6, 'El código debe tener 6 dígitos').max(6, 'El código debe tener 6 dígitos'),
});

type VerifyOtpValues = z.infer<typeof verifyOtpSchema>;

const VerifyOtpPage = () => {
  const form = useForm<VerifyOtpValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = (values: VerifyOtpValues) => {
    console.log('Código enviado:', values);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Verificar Código</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Ingresa el código que enviamos a tu correo&nbsp;
          <span className="text-primary font-semibold">para continuar</span>
        </p>
      </div>

      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-4 w-full">
              <FormLabel className="text-center">Código de Verificación</FormLabel>
              <FormControl>
                <InputOTP {...field} maxLength={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Verificar Código</Button>
      </Form>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/sign-in">
          ¿Ya tienes cuenta? <span className="font-semibold">Iniciar Sesión</span>
        </Link>
        <Link to="/auth/forgot-password">
          ¿No recibiste el código? <span className="font-semibold">Reenviar</span>
        </Link>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
