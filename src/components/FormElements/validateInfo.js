export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'This field is required';
    }

    if (!values.contact) {
        errors.contact = 'Please provide your contact number';
    } else if(values.contact.length !==8) {
        errors.contact = 'Please provide valid contact number';
    }

    if (!values.address) {
        errors.address = 'This field is required';
    }

    if (!values.address2) {
        errors.address2 = 'This field is required';
    }

    if (!values.recipient) {
        errors.recipient = 'This field is required';
    }

    if (!values.username) {
        errors.username = 'This field is required';
    }

    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email = 'Email address is invalid';
    }
    return errors;

    
};