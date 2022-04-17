import React from 'react';
import Button from '@mui/material/Button';

function PrimaryButton(props) {
    return (
        <Button variant="contained" onClick={props.handleAction}>{props.value}</Button>
    );
}

export default PrimaryButton;