import React, { Component } from "react";
import axios from "axios";
import Redirect from "react-router-dom/Redirect";
import Video from "../images/473287184.mp4";
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            occupation: "",
            relationshipType: "",
            location: "",
            password: "",
            imageURL: "",
            bio: "",
            redirect: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        const { name, email, occupation, relationshipType, location, password, imageURL, bio, redirect } = this.state;
        e.preventDefault();
        axios
            .post('/api/signup', {
                name: name,
                email: email,
                occupation: occupation,
                relationshipType: relationshipType,
                location: location,
                password: password,
                imageURL: imageURL,
                bio: bio
            })
            .then(() => {
                this.setState({
                    redirect: true,
                    name: "",
                    email: "",
                    occupation: "",
                    relationshipType: "",
                    location: "",
                    password: "",
                    imageURL: "",
                    bio: "",
                })
            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        const { name, email, occupation, relationshipType, location, password, imageURL, bio, redirect } = this.state;
        if (redirect) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <input name="name" onChange={this.handleInput} value={name} type="name" required />
                    <input name="email" onChange={this.handleInput} value={email} type="email" required />
                    <input name="occupation" onChange={this.handleInput} value={occupation} type="text" required />
                    <input name="relationshipType" onChange={this.handleInput} value={relationshipType} type="text" required />
                    <input name="location" onChange={this.handleInput} value={location} type="text" required />
                    <input name="password" onChange={this.handleInput} value={password} type="password" required />
                    <input name="imageURL" onChange={this.handleInput} value={imageURL} type="text" required />
                    <textarea name="bio" onChange={this.handleInput} value={bio} type="text" required />
                    <button>Submit</button>
                </form>
                <video autoplay loop id="video-background" muted plays-inline>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default SignUp;