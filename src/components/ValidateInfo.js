export default function ValidateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    // Email
    if(!values.email) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\[A-Z0]{2,}$/i.test(values.email))
    { errors.email = "Email address is invalid"
    
    }
    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) { 
    errors.password = "Password needs to be 6 characters more"
    }
    if(!values.password__confirm) {
        errors.password__confirm = "Password is required"
    } else if (values.password__confirm !== values.password) {
        errors.password__confirm = "Passwords do not match"
    }
    return errors;
}