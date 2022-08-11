/* eslint-disable no-undef */
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import ContactForm from '../Forms/ContactForm';

function Contact(): JSX.Element {
  return (
    <PageLayout body={<ContactForm />} />
  )
}

export default Contact;
