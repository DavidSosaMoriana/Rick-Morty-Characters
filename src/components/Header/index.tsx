import { Box, Divider, Grid, Typography } from '@mui/material';

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
};

export const HeaderComponent: React.FC<HeaderProps> = ({
    title,
    description,
    element,
}) => {
    return (
        <div>
          <Box sx={{ width: '100%', height: '350px' }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '100%' }}
            >
                <Grid item xs={5}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: '100%' }}
                    >
                        <Grid item>
                            <Typography variant="h1">{title}</Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2}}>
                            <Typography>{description}</Typography>
                        </Grid>
                        {/*Si el elemento existe muestralo, si no existe, no lo muestres*/}
                        {element !== undefined && (
                            <Grid sx={{ mt: 4 }} item>
                                {element}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
          <Divider />
        </Box>
       
        </div>
    );
};
