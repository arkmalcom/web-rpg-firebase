import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';

import { auth, provider } from '../../../utils/firebase-config';
import { setActiveUser, setUserSignOut, selectUserId } from '../../../features/auth/userSlice';

import Container from '@mui/material/Container';
import CharacterSelectForm from '../game/character/CharacterSelectForm';
import PrimaryButton from '../../common/PrimaryButton';

function LoginForm(props) {
    const dispatch = useDispatch()

    const userId = useSelector(selectUserId)

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid
            }))
            console.log(result.user)
        }).catch((err) => {
            console.log(err);
        });
    };

    const signOutFromGoogle = () => {
        signOut(auth).then(() => {
            dispatch(setUserSignOut())
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        userId ? (
            <Container>
                <CharacterSelectForm />
                <PrimaryButton value="Sign Out" handleAction={signOutFromGoogle} />
            </Container>
        ) : <PrimaryButton value="Log in with Google" handleAction={signInWithGoogle} />
    );
}

export default LoginForm;