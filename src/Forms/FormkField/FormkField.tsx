/* eslint-disable react/require-default-props */
import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@mui/material/TextField';

interface IFormikField {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    inputRef: React.Ref<any> | undefined;
}

function FormkField({
  name, label, type = 'text', required = false, inputRef,
}:IFormikField) {
  return (
    <Field
      name={name}
      label={label}
      type={type}
      required={required}
      as={TextField}
      inputRef={inputRef}
      fullWidth
      helperText={<ErrorMessage name={name} />}
    />
  );
}
export default FormkField;
