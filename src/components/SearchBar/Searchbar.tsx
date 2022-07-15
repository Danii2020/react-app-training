import * as React from "react"
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return(
    <Stack 
    direction='row'
    sx={{
        marginTop: '3rem',
        width: '80%'
    }}>
        <TextField
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder="Search a GitHub user"
        size='small'
        sx={{
            width:'90%'
        }}/>
        <IconButton
        size="small"
        sx={{
            left: '-3rem'
        }}>
            <SearchIcon/>
        </IconButton>
    </Stack>
    )
}

export default SearchBar;