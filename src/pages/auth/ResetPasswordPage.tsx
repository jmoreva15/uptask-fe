import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'La contraseña debe tener mínimo 6 caracteres'),
    password_confirmation: z.string().min(6, 'Debe repetir la contraseña'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation'],
  });

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
  });

  const onSubmit = (values: ResetPasswordValues) => {
    console.log('Nueva contraseña enviada:', values);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Reestablecer Contraseña</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Ingresa tu nueva contraseña&nbsp;
          <span className="text-primary font-semibold">para acceder nuevamente</span>
        </p>
      </div>

      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nueva Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Crea una nueva contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Repite tu nueva contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Guardar Nueva Contraseña</Button>
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

export default ResetPasswordPage;
