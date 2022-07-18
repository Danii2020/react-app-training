import React from "react"
import { Container } from '@mui/material';
import SearchBar from "./components/SearchBar/Searchbar";

export const App = () => {
    return(
        <Container sx={{
            background: 'whitesmoke',
            width: '80vw',
            height: '500px',
            borderRadius: '16px',
            marginTop: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} >
            <SearchBar></SearchBar>
        </Container>
    )
}