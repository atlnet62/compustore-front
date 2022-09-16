import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../../../Helpers/sanitize";
import { signup, signin } from "../../../services/API/user.js";
import logo from './../../../assets/images/logo.png';
import { Link } from "react-router-dom";

function Form({ formType }) {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: ""});
    const email = useRef();

    const [msg, setMsg] = useState(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formType === "signin"){
            handleSignin();
        }
        if(formType === "signup"){
            handleSignup();
        }
        setInputs({email: "", password: ""});
    };

    const handleSignin = async () => {
		const response = await signin(validate("signin", inputs));
		if(response.status === 404){
			setMsg(response.data.msg);
			return;
		}
        // refecto en tablea en fin de projet
		localStorage.setItem("uat", response.data.token)
        localStorage.setItem("uuid", response.data.uuid)
		navigate("/")
    }

    const handleSignup = async () => {
        const inputsValidation = validate("signup", inputs);
		if(inputsValidation === true) {
			const response = await signup(inputs);
			if (response.status === 409) {
				setMsg(response.data.msg);
				return;
			} else {
				navigate("/entry");
			}
		} else {
			setMsg(inputsValidation);
		}
    }

    useEffect(() => {
        email.current.focus();
    }, [])

    return (
        <main id="entry">
            <h2>Sign form</h2>
            <section id="form-entry">
                <img src={logo} alt="logo" />
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>{formType === "signin" ? "Signin" : "Signup" }</legend>
                        
                        <input
                            ref={email}
                            type="text"
                            placeholder="E-mail ?"
                            value={inputs.email}
                            onChange={(e) =>
                                setInputs({ ...inputs, email: e.target.value })
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password ?"
                            value={inputs.password}
                            onChange={(e) =>
                                setInputs({ ...inputs, password: e.target.value })
                            }
                        />

                        {msg && <p>{msg}</p>}

                        <input type="submit" value="Send"/>
                    </fieldset>
                </form>
                {formType === "signin" ? <p>Register ? <Link to={"/entry/signup"}>here</Link></p> : null}
            </section>
        </main>
    );
}

export default Form;