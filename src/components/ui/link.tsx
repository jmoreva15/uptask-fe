import { cn } from '@/lib/utils';
import { Link as LinkRouter, type LinkProps } from 'react-router';

function Link({ className, ...props }: LinkProps) {
  return (
    <LinkRouter
      className={cn(
        'text-gray-300 hover:text-fuchsia-400 transition-colors duration-200',
        className
      )}
      {...props}
    />
  );
}

export { Link };
