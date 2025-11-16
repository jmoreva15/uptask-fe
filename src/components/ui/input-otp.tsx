import { OTPInput } from 'input-otp';
import { cn } from '@/lib/utils';

interface InputOTPProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  className?: string;
}

export function InputOTP({ value, onChange, maxLength = 6, className }: InputOTPProps) {
  return (
    <OTPInput
      value={value}
      onChange={(val) => onChange(val)}
      maxLength={maxLength}
      containerClassName={cn('flex justify-center gap-3 sm:gap-4', className)}
      render={({ slots }) =>
        slots.map((slot, idx) => (
          <div
            key={idx}
            className={cn(
              'w-10 sm:w-12 h-12 sm:h-14 flex items-center justify-center rounded-lg border font-semibold text-xl sm:text-2xl bg-gray-50 text-gray-800 transition-all',
              slot.isActive ? 'border-primary ring-1 ring-primary' : 'border-gray-300'
            )}
          >
            {slot.char !== null ? slot.char : <span className="text-gray-400">•</span>}
          </div>
        ))
      }
    />
  );
}
