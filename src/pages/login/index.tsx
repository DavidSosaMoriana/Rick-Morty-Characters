import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';

type LoginType = {
    username: string;
    password: string;
};

export const LoginPage: React.FC<{}> = () => {
    const { getError, getSuccess } = useNotification();
    const [loginData, setloginData] = useState<LoginType>({
        username: '',
        password: '',
    });

    //Guardar en el estado de la app el usuario y contraseña que de el usuario por el formulario
    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value });
    };

    //Manejar el evento de guardado de datos y mostrarlos por consola
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData)
            .then(() => {
                getSuccess(JSON.stringify(loginData));
            })
            .catch((error) => {
                getError(error.message);
            });
    };
    return (
        <Container sx={{ mt: 9 }} maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '90vh' }}
            >
                <Grid item>
                    <Paper sx={{ padding: '1.5em', borderRadius: '.5em' }}>
                        <Typography sx={{ mt: '1px', mb: '10px' }} variant="h4">
                            Escribe tus datos
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                name="username"
                                margin="normal"
                                label="Email o Usuario"
                                type="text"
                                sx={{ mt: 2, mb: 1.5 }}
                                fullWidth
                               
                                onChange={dataLogin}
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                label="Contraseña"
                                type="password"
                                autoComplete="on"
                                sx={{ mt: 1.5, mb: 1.5 }}
                              
                                fullWidth
                                onChange={dataLogin}
                            />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 3 }}
                            >
                               Inicia sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
