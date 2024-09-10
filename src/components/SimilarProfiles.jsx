"use client";
import { useEffect, useState } from 'react';
import { getSimilarProfiles } from '../services/api';
import * as React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie'
import "../app/globals.css"

const SimilarProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const router = useRouter();
  const cookies = new Cookies(null, { path: '/' });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios({
            method: "POST",
            data: {
                email: email_ref.current.value,
            },
            withCredentials: true,
            url: "http://localhost:3002/api/v1/play/similar-profiles",
            headers:{
                Authorization:`Bearer ${cookies.get("access token")}`,
            }
          })

        let expires = new Date();
        expires.setTime(expires.getTime() + (2 * 60 * 1000));
        setCookie('access token', response.data["access token"], { path: '/',  expires});
     
        toast.success("Login successful");
        router.push("/landing");
    }
    catch(err){
        console.log(err);
        toast.error("wrong credentials");
    }
    };
    fetchProfiles();
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Similar Profiles</h3>
      {profiles.map(profile => (
        <div key={profile.email} className="p-2 border-b">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
        </div>
      ))}
    </div>
  );
};
