import React, {useState, useEffect} from 'react';
import _ from "lodash/fp";

import {useForm} from 'react-hook-form'
import '../assets/css/Contact.css'
import {useHttp} from "../hooks/http.hook";
import axios from "axios";


import {useToasts} from 'react-toast-notifications'

const Contact = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        setState({
            ...state,
        });
    }, []);


    const handleName = (e) => {
        setState({
            ...state,
            name: e.target.value,
        });
    };

    const handleEmail = (e) => {
        setState({
            ...state,
            email: e.target.value,
        });
    };
    const handleMessage = (e) => {
        setState({
            ...state,
            message: e.target.value,
        });
    };
    // console.log(state)


    const {register, handleSubmit, errors} = useForm()
    const {request} = useHttp()


    const {addToast} = useToasts()
    const formSubmit = async (state, e) => {
        setState({
            name: e.target.reset(),
            email: e.target.reset(),
            message: e.target.reset(),
        })
        const {name, email, message} = state
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:5000/form', {name, email, message})
            .then(function (response) {
                addToast('Message has been sent', {
                    appearance: 'success',
                })
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    // const formSubmit = async () => {
    // 	const response = await fetch('http://localhost:5000/form', {
    // 		method: 'POST',
    // 		body: JSON.stringify(state),
    // 		headers: {
    // 			'Content-Type': 'application/json',
    // 		},
    // 	});
    //
    // 	const result = await response.text();
    //
    // 	console.log(result);
    // };


    return (
        <div className="contact-wrapper">
            <form
                encType="multipart/form-data"
                action="contact-form-handler.php"
                method="post"
                id="myForm"
                name="myForm"
                onSubmit={handleSubmit(formSubmit)}
            >
                <div className="container">
                    <div className="row input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input id="name" name="name" defaultValue={state.name}
                                       onChange={handleName}
                                       ref={register({required: true, pattern: /^[A-Za-z]+$/i})}/>
                                {_.get("name.type", errors) === "required" && (
                                    <p className="invalid-feedback">Name is required</p>
                                )}
                                {_.get("name.type", errors) === "pattern" && (
                                    <p className="invalid-feedback">Alphabetical characters only</p>
                                )}
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="email" id="email" name="email" defaultValue={state.email}
                                       onChange={handleEmail}
                                       ref={register({required: true})}/>
                                {errors.email && <p className="invalid-feedback">Email is required</p>}

                                <label>Email</label>
                            </div>
                        </div>
                        {/*<div className="col-xs-12">*/}
                        {/*    <div className="styled-input wide">*/}
                        {/*        <input*/}
                        {/*            type="file"*/}
                        {/*            className="custom-file-input"*/}
                        {/*            name="file"*/}
                        {/*            id="file"*/}
                        {/*            aria-describedby="inputGroupFileAddon01"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input
                                    name="message"
                                    id="message"
                                    defaultValue={state.message}
                                    onChange={handleMessage}
                                    ref={register({required: true})}
                                    className="input-message"
                                />
                                {errors.message && <p className="invalid-feedback">Message is required</p>}
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div>
                                <button
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    className="btn-lrg submit-btn"

                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Contact