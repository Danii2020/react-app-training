/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { Box } from '@mui/material';

type BodyProps = {
  content: JSX.Element
}

function Body({ content }: BodyProps): JSX.Element {
  return (
    <Box>
      { content }
    </Box>
  )
}

export default Body;
