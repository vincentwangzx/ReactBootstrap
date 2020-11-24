import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';


const FormRecruit = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } 
    = useForm(
        submitForm,
        validate
        );

    return (
        <div className="form-content-right">
            <form className='form' onSubmit={handleSubmit} noValidate>
                <h1>
                    Join our exciting team today! Take a minute
                    to fill out the details below.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='Your Name' className='form-label'>
                        Your Name
                    </label>
                    <input type='text'
                               name='username'
                               className='form-input'
                               placeholder='E.g. John Smith'
                               value={values.username}
                               onChange={handleChange}
                               />
                               {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Your Contact' className='form-label'>
                        Your Contact
                    </label>
                    <input type='text'
                               name='contact'
                               className='form-input'
                               placeholder='E.g. 81235678'
                               value={values.contact}
                               onChange={handleChange}
                               pattern="/^[0-9\b]+$/"
                               />
                               {errors.contact && <p>{errors.contact}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Address' className='form-label'>
                        Your Address:
                    </label>
                    <input type='text'
                               name='address'
                               className='form-input'
                               placeholder='E.g. 123 Admiralty Ave'
                               value={values.address}
                               onChange={handleChange}
                               />
                               {errors.address && <p>{errors.address}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                    Your Email
                    </label>
                    <input type='email'
                               name='email'
                               className='form-input'
                               placeholder='E,g, 123@abc.com'
                               value={values.email}
                               onChange={handleChange}
                               />
                               {errors.email && <p>{errors.email}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormRecruit;