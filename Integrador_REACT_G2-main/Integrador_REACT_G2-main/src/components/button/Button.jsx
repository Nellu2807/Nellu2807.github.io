import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css'


const Buttons = ({ text, size, bsPrefix, onClick, icon }) => {
    return (
        <>
            <Button type='submit' bsPrefix={bsPrefix} icon={icon} size={size} onClick={onClick}>{text}</Button>{' '}
        </>
    )


}

export default Buttons;