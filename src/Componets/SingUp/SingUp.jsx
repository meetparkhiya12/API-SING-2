import React from 'react'
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  singUpasync } from '../../Services/Action/auth.action';

function SingUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [inputValue , setinputValue] = useState(
        {
            email : '',
            password : ''
        }
    );


    const handlechange = (e) => {
        setinputValue({...inputValue,[e.target.name] : e.target.value})
    }
console.log(inputValue);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("dfsdfsdfsdfsdfsd");
        dispatch(singUpasync(inputValue));

        
    }






    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div class=" w-full max-w-xs mt-5">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) =>handleSubmit(e)}>
                        <h2 className='my-2'>Sing Up</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="Username" value={inputValue.email} name='email' onChange={(e) => handlechange(e)}/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={inputValue.password} name='password' onChange={(e) => handlechange(e)}/>
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        Alredy have a Account <NavLink to='/singIn' className="text-blue-500">SingIn</NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SingUp