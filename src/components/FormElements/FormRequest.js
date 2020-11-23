import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';


const FormRequest = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } 
    = useForm(
        submitForm,
        validate
        );

    return (
        <div className="form-content-right">
            <form className='form' onSubmit={handleSubmit} noValidate>
                <h1>
                    Get your items sent quikerly today! 
                    Submit a request by taking a minute 
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
                        Pick Up From:
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
                    <label htmlFor='Recipient' className='form-label'>
                        Name of Recipient
                    </label>
                    <input type='text'
                               name='recipient'
                               className='form-input'
                               placeholder='E.g. Jane Doe'
                               value={values.recipient}
                               onChange={handleChange}
                               />
                               {errors.recipient && <p>{errors.recipient}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Address2' className='form-label'>
                        Send to:
                    </label>
                    <input type='text'
                               name='address2'
                               className='form-input'
                               placeholder='E.g. 123 Admiralty Ave'
                               value={values.address2}
                               onChange={handleChange}
                               />
                               {errors.address2 && <p>{errors.address2}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Date' className='form-label'>
                        Date of delivery:
                    </label>
                    <input type='date'
                               name='date'
                               className='form-input'
                               placeholder=''/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Time' className='form-label'>
                    Pick Up Time:
                    </label>
                    <input type='time'
                               name='time'
                               className='form-input'
                               placeholder=''/>
                               
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

export default FormRequest
