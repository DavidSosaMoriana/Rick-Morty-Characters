import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material';
import React from 'react';

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
};

export const CardComponent: React.FC<CardProps> = ({
    image,
    name,
    species,
    status,
}) => (
    <Card>
        <CardMedia
            component="img"
            height="190"
            image={image}
            alt="Rick Sanchez"
        />
        <CardContent>
            <Typography sx={{ mb: 1.5 }} variant="h4">
                {name}
            </Typography>
            <Divider />
            <Typography sx={{ mt: 1.5 }}>Specie: {species}</Typography>
            <Typography sx={{ mt: 1.5 }}>Status: {status}</Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth variant="contained" size="small">
                Aprende más
            </Button>
        </CardActions>
    </Card>
);
