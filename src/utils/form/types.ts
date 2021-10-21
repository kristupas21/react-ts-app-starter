import { FormikHelpers, FormikProps } from 'formik';

export type CustomFormError = {
  id?: MessageId;
  values?: any,
  message?: Omit<CustomFormError, 'message'>
};

export type CustomFormErrors<T = { [key: string]: any }> = Record<keyof T, CustomFormError>;

export type FormHelpers<T = any> = FormikHelpers<T> &
    { setFieldError(key: keyof T, error: CustomFormError) };

export type FormProps<T = any> = FormikProps<T & { externals?: any }> &
    { setFieldError(key: string, error: CustomFormError) } &
    { errors: CustomFormErrors<T> };

export type SubmitHandler<T> = (values: T, helpers?: FormHelpers<T>) => void;
