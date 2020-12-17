import {useState} from 'react';
import ValidateInfo from './ValidateInfo';

const UseForm = ValidateForm => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password:"",
        password__confirm:""
    })
    
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

const handleSubmit = e => {
    e.preventDefault();

    setErrors(ValidateForm(values));
    setIsSubmitting(true)
};

return {handleChange, values, handleSubmit};

};

export default UseForm;