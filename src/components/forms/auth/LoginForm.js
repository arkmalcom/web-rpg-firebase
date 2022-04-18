import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { auth, provider } from '../../../utils/firebase-config';
import { setActiveUser } from '../../../features/auth/userSlice';

import PrimaryButton from '../../common/PrimaryButton';

function LoginForm(props) {
    const dispatch = useDispatch()

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

    return (
        <PrimaryButton value="Log in with Google" handleAction={signInWithGoogle} />
    );
}

export default LoginForm;