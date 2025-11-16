import { cn } from '@/lib/utils';

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      className={cn(
        'font-medium text-base sm:text-lg text-gray-700 ',
        'data-[error=true]:text-red-600',
        className
      )}
      {...props}
    />
  );
}

export { Label };
