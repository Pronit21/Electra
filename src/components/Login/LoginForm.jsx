// import { useState } from 'react';
import '../index.css';

function LoginForm() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });

    // const [rememberMe, setRememberMe] = useState(false);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("Form submitted:", formData);
    //     setFormData({
    //         name: '',
    //         email: '',
    //         password: ''
    //     });
    // }

    // function handleInputChange(e) {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }

        return (
            <div>
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner">
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn">Let&apos;s go!</button>
                                    </form>
                                </div>
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" name="name" placeholder="Name" type="text" />
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn">Confirm!</button>
                                    </form>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
    
    export default LoginForm;