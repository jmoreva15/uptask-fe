/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';

import { cn } from '@/lib/utils';

function Form<T extends FieldValues>({
  form,
  ...props
}: { form: UseFormReturn<T> } & React.ComponentProps<'form'>) {
  return (
    <FormProvider {...form}>
      <form noValidate {...props} />
    </FormProvider>
  );
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('grid gap-2', className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<'label'>) {
  const { formItemId, error } = useFormField();

  return (
    <label
      htmlFor={formItemId}
      className={cn(
        'font-medium text-base sm:text-lg',
        error ? 'text-red-600' : 'text-gray-700',
        className
      )}
      {...props}
    />
  );
}

function FormControl({ className, ...props }: React.ComponentProps<'input'>) {
  const { formItemId, formDescriptionId, formMessageId, error } = useFormField();

  return (
    <input
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      className={cn(
        'w-full p-3 border border-gray-300 rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-primary',
        error && 'border-red-600 focus:ring-red-600',
        className
      )}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField();

  return <p id={formDescriptionId} className={cn('text-sm text-gray-500', className)} {...props} />;
}

function FormMessage({ className, children, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      className={cn(
        'text-center bg-red-100 text-red-600',
        'font-bold p-3 rounded-md text-sm uppercase',
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
};
