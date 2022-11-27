import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Pagination,
} from '@mui/material';
import React from 'react';
import { HeaderComponent } from './../../components/Header/index';
import { characters } from './../../api/characters';
import { CardComponent } from './../../components/Card/index';
import { TypeCharacter } from './../../interface/character.interface';

export const HomePage: React.FC<{}> = () => {
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);
    const [allCharacters, setAllCharacters] = React.useState<
        TypeCharacter[] | null
    >([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        characters
            .getAll({ page })
            .then((r) => {
                setCount(r.data.info.pages);
                setAllCharacters(r.data.results);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [page]);

    const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

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
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div>
                        {allCharacters?.length !== 0 ? (
                            <Grid
                                sx={{ my: 2 }}
                                container
                                spacing={2}
                                direction="row"
                            >
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
                            'No data'
                        )}
                    </div>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <Pagination
                            sx={{ my: 3 }}
                            count={count}
                            page={page}
                            onChange={handleChange}
                            variant="outlined"
                            color="primary"
                            size="large"
                        />
                    </Box>
                </>
            )}
        </Container>
    );
};
