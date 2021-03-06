/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props: {
  setInputUser: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState('octocat');

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '3rem',
        width: '80%',
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        value={valueInput}
        onChange={onSearchValueChange}
        placeholder="Search a GitHub user"
        size="small"
        sx={{
          width: '90%',
        }}
      />
      <IconButton
        aria-label="searchButton"
        onClick={handleSubmit}
        size="small"
        sx={{
          left: '-3rem',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default SearchBar;
