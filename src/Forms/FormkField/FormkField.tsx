/* eslint-disable react/require-default-props */
import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@mui/material/TextField';

interface IFormikField {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
}

function FormkField({
  name, label, type = 'text', required = false,
}:IFormikField) {
  return (
    <Field
      required={required}
      as={TextField}
      label={label}
      name={name}
      fullWidth
      type={type}
      helperText={<ErrorMessage name={name} />}
    />
  );
}
export default FormkField;
