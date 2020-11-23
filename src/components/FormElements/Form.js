import React, { useState } from 'react';
import FormRequest from './FormRequest';
import FormReceived from './FormReceived'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <React.Fragment>
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src='images/img-2.jpg' alt='request' />
            </div>
            {!isSubmitted ? ( 
            <FormRequest submitForm=
            {submitForm} /> 
            ) : ( <FormReceived />
            )}
        </div>
        </React.Fragment>
    );
};

export default Form
