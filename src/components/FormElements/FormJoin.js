import React, { useState } from 'react';
import FormRecruit from './FormRecruit';
import FormReceived from './FormReceived'

const FormJoin = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <React.Fragment>
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src='images/img-2.svg' alt='request' />
            </div>
            {!isSubmitted ? ( 
            <FormRecruit submitForm=
            {submitForm} /> 
            ) : ( <FormReceived />
            )}
        </div>
        </React.Fragment>
    );
};

export default FormJoin