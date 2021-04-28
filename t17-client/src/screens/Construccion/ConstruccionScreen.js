import React from 'react';
import {
    Typography,
    Container,
    Paper,
    Box
} from "@material-ui/core";

const ConstructionScreen = () => {
    return (
        <Container maxWidth="sm">
            <Paper>
                <Box p={3}>
                    <Typography variant="h3" display="block">
                        Pagina en Construccion
                    </Typography>
                    <Typography variant="overline" display="block">
                        Disculpe las molestias
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default ConstructionScreen;