import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { HeaderComponent } from './../../components/Header/index';
import { characters } from './../../api/characters';
import { CardComponent } from './../../components/Card/index';
import { TypeCharacter } from './../../interface/character.interface';

export const HomePage: React.FC<{}> = () => {
    const [allCharacters, setAllCharacters] = React.useState<
        TypeCharacter[] | null
    >([]);

    React.useEffect(() => {
        characters
            .getAll({ page: 1 })
            .then((r) => {
                setAllCharacters(r.data.results);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title="Rick & Morty"
                description="Explore and learn more about this universe"
                element={
                    <Box
                        component="span"
                        sx={{
                            border: '2px dashed #82CFFD',
                            borderRadius: '16px',
                            p: 2,
                            color: '#82CFFD',
                        }}
                    >
                        click the cards!
                    </Box>
                }
            />
            <br />
            <div>
                {allCharacters?.length !== 0 ? (
                    <Grid container spacing={2} direction="row">
                        {allCharacters!.map((character) => (
                            <Grid item xs={3}>
                                <CardComponent
                                    key={character.id}
                                    image={character.image}
                                    name={character.name}
                                    species={character.species}
                                    status={character.status}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    'error'
                )}
            </div>
        </Container>
    );
};
