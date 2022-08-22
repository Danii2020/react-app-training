/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Button, Stack } from '@mui/material';
import * as yup from 'yup';
import FormkField from './FormkField/FormkField';

interface IUserValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues:IUserValues = {
  firstName: '',
  lastName: '',
  email: '',
}

const specialRegex = /^(?![\s\S]*[^\w -]+)[\s\S]*?$/;

const userSchema = yup.object().shape({
  firstName: yup.string()
    .max(15, 'Must be 15 characters or less')
    .matches(specialRegex, 'Invalid name')
    .required('Required'),
  lastName: yup.string()
    .max(20, 'Must be 20 characters or less')
    .matches(specialRegex, 'Invalid lastname')
    .required('Required'),
  email: yup.string()
    .email('Invalid email address')
    .required('Required'),
});

function ContactForm() {
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstNameInputRef.current?.focus();
  }, []);
  const handleSubmit = (values:IUserValues): void => {
    alert(JSON.stringify(values));
  }
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        margin: '2rem',
      }}
    >
      <h1>Contact us</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <FormkField
              name="firstName"
              label="FirstName"
              required
              inputRef={firstNameInputRef}
            />
            <FormkField
              name="lastName"
              label="LastName"
              required
              inputRef={null}
            />
            <FormkField
              name="email"
              label="Email"
              required
              inputRef={null}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!dirty || !isValid}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
}

export default ContactForm;
