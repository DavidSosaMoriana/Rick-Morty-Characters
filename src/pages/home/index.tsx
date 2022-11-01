import { Button, Container } from '@mui/material';
import React from 'react';
import { HeaderComponent } from './../../components/Header/index';
import { characters } from './../../api/characters';

export const HomePage: React.FC<{}> = () => {

    React.useEffect(() => {
        characters.getById({id: 1}).then((r) => {
            console.log(r.data);
        }).catch((e) => {
            console.error(e)
        })
    })

    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title="Rick & Morty"
                description="Explora los personajes de este divertido universo"
                element={<Button variant="contained">¡Activa las cartas!</Button>}
            />
        </Container>
    );
};
