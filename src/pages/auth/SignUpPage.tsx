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

const signUpSchema = z
  .object({
    email: z.string().email('Debe ser un correo válido'),
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    password: z.string().min(6, 'Mínimo 6 caracteres'),
    password_confirmation: z.string().min(6, 'Debe repetir la contraseña'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation'],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

function SignUpPage() {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      nombre: '',
      password: '',
      password_confirmation: '',
    },
  });

  const onSubmit = (values: SignUpValues) => {
    console.log('Registro enviado:', values);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Crear Cuenta</h1>
        <p className="text-lg sm:text-2xl font-light text-white leading-relaxed max-w-md">
          Llena el formulario para&nbsp;
          <span className="text-primary font-semibold">crear tu cuenta</span>
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
                <Input type="email" placeholder="Ingresa tu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ingresa tu nombre completo" {...field} />
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
                <Input type="password" placeholder="Crea una contraseña" {...field} />
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
              <FormLabel>Repetir Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Repite tu contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Registrarme</Button>
      </Form>

      <div className="flex flex-col items-center gap-2">
        <Link to="/auth/sign-in">
          ¿Ya tienes cuenta? <span className="font-semibold">Iniciar Sesión</span>
        </Link>
        <Link to="/auth/forgot-password">
          ¿Olvidaste tu contraseña? <span className="font-semibold">Reestablecer</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
