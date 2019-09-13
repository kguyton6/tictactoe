import React from 'react';
import { Button } from '../styles/styles';


export default ({ value, onClick }) => {
    return (
        <Button onClick={onClick} disabled={value}><span>{value}</span></Button>
    )
}