import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux';

import CharacterSelectForm from '../../components/forms/game/character/CharacterSelectForm';
import Footer from '../../components/common/Footer';
import LoginForm from '../../components/forms/auth/LoginForm';
import PrimaryButton from '../../components/common/PrimaryButton';
import { auth } from '../../utils/firebase-config';
import { selectUserId, setActiveUser, setUserSignOut } from '../../features/auth/userSlice';
import { unsetCharacters } from '../../features/game/characterSlice';


function Home(props) {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setActiveUser({
                userName: user.displayName,
                userEmail: user.email,
                userId: user.uid
            }))
        }
        else {
            dispatch(setUserSignOut());
            dispatch(unsetCharacters());
        }
    })

    const signOutFromGoogle = () => {
        signOut(auth).then(() => {
            dispatch(setUserSignOut())
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <Box>
            <Container>
                <Grid container style={{ minHeight: "90vh" }} justifyContent="center" alignItems="center">
                    <Grid item>
                        {
                            userId
                                ? (
                                    <div>
                                        <CharacterSelectForm />
                                        <PrimaryButton value="Sign Out" handleAction={signOutFromGoogle} />
                                    </div>
                                )
                                : <LoginForm />
                        }
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
}

export default Home;