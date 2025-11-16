import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { zodResolver } from '@hookform/resolvers/zod';

const forgotPasswordSchema = z.object({
  email: z.string().email('Debe ser un correo válido').min(1, 'El email es obligatorio'),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: ForgotPasswordValues) => {
    console.log('Datos enviados:', values);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Reestablecer Password</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          ¿Olvidaste tu contraseña? Coloca tu email&nbsp;
          <span className="text-primary font-semibold">y reestablece tu acceso</span>
        </p>
      </div>

      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Ingresa tu email de registro" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar Instrucciones</Button>
      </Form>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/sign-in">
          ¿Ya tienes cuenta? <span className="font-semibold">Iniciar Sesión</span>
        </Link>
        <Link to="/auth/sign-up">
          ¿No tienes cuenta? <span className="font-semibold">Crear una</span>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
