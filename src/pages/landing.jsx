"use client";
import * as React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import "../app/globals.css"

// import PreferencesForm from '../components/PreferencesForm';
import ProfileSection from '../components/ProfileSection';
// import SimilarProfiles from '../components/SimilarProfiles';

const LandingPage = () => {
  const [profile, setProfile] = React.useState();
  const router = useRouter();
  const cookies = new Cookies(null, { path: '/' });

  React.useEffect(() => {
    async function fetch_data(){
        const response = await axios({
            method: "GET",
            url: "http://localhost:3002/api/v1/play/preferences",
            headers:{
                Authorization:`Bearer ${cookies.get("access token")}`,
            }
        })
        setProfile(response.data[0]);
    }
    fetch_data();
  }, []);

  return (
    <>
        <div className="w-full max-w-md m-auto mt-10 py-4 px-4">
            <h1 className="text-4xl font-bold mb-10">Welcome {profile ? profile.name : "Loading..."}</h1>
            {profile ? 
                <ProfileSection profile={profile} /> : 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 mx-auto rounded" onClick={()=>router.push("/form")}>
                    Add Preferences
                </button>
            }
        </div>
    </>
  );
};

export default LandingPage;

