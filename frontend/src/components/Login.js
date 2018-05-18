import React, { Component } from "react";
import axios from "axios";
import Redirect from "react-router/Redirect";
import Video from "../images/473287184.mp4";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            redirect: false
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        const { email, password, redirect } = this.state;
        e.preventDefault();
        axios
            .post('/api/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log("/api/login", res.data);
                this.setState({
                    redirect: true,
                    email: "",
                    password: "",
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { email, password, redirect } = this.state;
        if (redirect) {
            return <Redirect to="/feeds" />
        }
        return (
            <div>
                <div class="container content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 login-form">
                            <h2>Login Form</h2>
                            <form class="login" onSubmit={this.handleSubmitForm}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input name="email" onChange={this.handleInput} value={email} required type="email" class="form-control" id="email-input" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input name="password" onChange={this.handleInput} value={password} type="password" required class="form-control" id="password-input" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-login">Login</button>
                            </form>
                            <br />
                            <a href="/">
                                <p><u>Or Sign Up Here</u></p>

                            </a>
                            <br />
                        </div>
                    </div>
                </div>
                <video autoplay loop id="video-background" muted plays-inline>
                    <source src={Video}
                        type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Login;