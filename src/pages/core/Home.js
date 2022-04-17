import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

import Footer from '../../components/common/Footer';
import LoginForm from '../../components/forms/auth/LoginForm';


function Home(props) {
    return (
        <Box>
            <Container>
                <Grid container style={{ minHeight: "90vh" }} justifyContent="center" alignItems="center">
                    <Grid item>
                        <LoginForm />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
}

export default Home;