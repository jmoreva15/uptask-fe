import { cn } from '@/lib/utils';

function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'w-full p-2 text-base sm:p-3 sm:text-lg border border-gray-300 rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-primary',
        'aria-invalid:border-red-600 aria-invalid:focus:ring-red-600',
        className
      )}
      {...props}
    />
  );
}

export { Input };
