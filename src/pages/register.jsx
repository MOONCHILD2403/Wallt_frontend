"use client";
import * as React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import "../app/globals.css"

export default function Login() {

    const name_ref = React.useRef();
    const email_ref = React.useRef();
    const password_ref = React.useRef();
    const router = useRouter();

    async function handlesubmit(e){
        e.preventDefault();
        try{
            const res = await axios({
                method: "POST",
                data: {
                    name: name_ref.current.value,
                    email: email_ref.current.value,
                    password: password_ref.current.value
                },
                withCredentials: true,
                url: "http://localhost:3001/api/v1/users/register",
              })
            toast.success("registration successfull");
            router.push("/login");
        }
        catch(err){
            console.log(err);
            toast.error("registration unsuccessfull");
        }
        
    };
  return (
    <>
    <Toaster/>
    <div className="w-full max-w-xs m-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlesubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Name" ref={name_ref} required/>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter valid Email" ref={email_ref} required/>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" ref={password_ref} required/>
            </div>
            <div className="flex items-center justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
            </button>
            </div>
        </form>
    </div>
  </>
  );
}
