import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

function Footer(props) {
    return (
        <Box>
            <Container style={{ minHeight: "10vh" }}>
                <Grid container>
                    <Grid item>
                        We got some links here
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;