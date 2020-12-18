import React from 'react';
import './SignupForm.css';
import UseForm from './UseForm';
import ValidateInfo from './ValidateInfo';
import Header from './Header';
import {Link} from 'react-router-dom';

const SignupForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} 
    = UseForm(submitForm, ValidateInfo);

    return(
        <div className="login__container">
            <Header />
            <div className="signup__headline">
                <h2 className="Sign">Sign&nbsp;</h2><h2 className="Up">Up</h2>
            </div>
        
        <form className="form__wrapper" onSubmit={handleSubmit}>
            
            <div className="form__inputs">
                
                <label htmlFor="username">
                    Username
                </label>
                <input 
                id='username'
                type='text'
                name='username'
                className='form__input--username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange} 
                />

                {errors?.username && <p>{errors.username}</p>}

            </div>

            <div className="form__inputs">
                
                <label htmlFor="email">
                    Email
                </label>
                <input 
                id='email'
                type='email'
                name='email' 
                className='form__input--email'
                placeholder='Enter your email address'
                value={values.email}
                onChange={handleChange} 
                />

                {errors?.email && <p>{errors.email}</p>}  

            </div>

            <div className="form__inputs">
                
                <label htmlFor="password">
                    Password
                </label>
                <input 
                id='password'
                type='password' 
                name='password' 
                className='form__input--password'
                placeholder='Enter your password' 
                value={values.password}
                onChange={handleChange} 
                />

                {errors?.password && <p>{errors.password}</p>}

            </div>

            <div className="form__inputs">
                
                <label htmlFor="password__confirm">
                    Confirm Password
                </label>
                <input 
                id='password__comfirm'
                type='password'
                name='password__confirm' 
                className='form__input--passwordconfirm'
                placeholder='Enter your password'
                value={values.password__confirm}
                onChange={handleChange} 
                />

                {errors?.password__confirm && <p>{errors.password__confirm}</p>}

                </div>

            <div className="submit__container">
            <Link to="/signupsuccess">
                <button 
                className="form__input--button"
                type="submit">
                Sign Up
                </button>
            </Link>
                <span 
                className="form__input--login">
                Already have an account? Login&nbsp;   
                <a href="www.google.de">here</a>
                </span>
            </div>
        </form>
        <div className="signup__footer--bottom">
            <p className="signup__footer--impressum">
                Copyright: Hendrik Kretschmer / Luruper Weg 4 / 20257 Hamburg
            </p>
        </div>
        </div>
    );
}

export default SignupForm;