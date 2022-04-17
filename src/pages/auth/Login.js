import { signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '../../utils/firebase-config';
import { setActiveUser, setUserSignOut, selectUserEmail, selectUserName } from '../../features/auth/userSlice';

import PrimaryButton from '../../components/common/PrimaryButton';

function Login(props) {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email
            }))
            navigate("../", { replace: true })
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
        <div>
            <div className="heading-container">
                <h1>
                    Login
                </h1>
            </div>
            <PrimaryButton value="Log in with Google" handleAction={signInWithGoogle} />
        </div>
    );
}

export default Login;