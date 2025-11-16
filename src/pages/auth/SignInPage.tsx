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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

const signInSchema = z.object({
  email: z.string().email('Debe ser un correo válido').min(1, 'El email es obligatorio'),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .min(6, 'Debe tener mínimo 6 caracteres'),
});

type SignInValues = z.infer<typeof signInSchema>;

function SignInPage() {
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: SignInValues) => {
    console.log('Datos enviados:', values);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Iniciar Sesión</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Comienza a planear tus proyectos&nbsp;
          <span className="text-primary font-semibold">iniciando sesión en este formulario</span>
        </p>
      </div>

      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full bg-white rounded-2xl p-6 sm:p-8"
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Ingresa tu contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Iniciar Sesión</Button>
      </Form>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/sign-up">
          ¿No tienes cuenta? <span className="font-semibold">Crear una</span>
        </Link>
        <Link to="/auth/forgot-password">
          ¿Olvidaste tu contraseña? <span className="font-semibold">Reestablecer</span>
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;
