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
    
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold">Landing Page</h1>
    //   {/* {profile && <ProfileSection profile={profile} />} */}
    //   {/* <PreferencesForm updateProfile={fetchProfile} /> */}
    //   {/* <SimilarProfiles /> */}
    // </div>
  );
};

export default LandingPage;


// export default function Login() {

//     const email_ref = React.useRef();
//     const password_ref = React.useRef();
//     const router = useRouter();
//     const [cookies, setCookie] = useCookies('access_token')

//     async function handlesubmit(e){
//         e.preventDefault();
//         try{
//             const response = await axios({
//                 method: "POST",
//                 data: {
//                     email: email_ref.current.value,
//                     password: password_ref.current.value
//                 },
//                 withCredentials: true,
//                 url: "http://localhost:3001/api/v1/users/login",
//               })

//             let expires = new Date()
//             expires.setTime(expires.getTime() + 20*60*1000)
//             setCookie('access token', response.data["access token"], { path: '/',  expires})
         
//             toast.success("Login successful");
//             router.push("/");
//         }
//         catch(err){
//             console.log(err);
//             toast.error("wrong credentials");
//         }
        
//     };
//   return (
//     <>
//     <Toaster/>
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Profile Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-medium mb-2">Profile</h2>
//           <p>Name: John Doe</p>
//           <p>Email: john.doe@example.com</p>
//           {/* Add more profile details as needed */}
//         </div>

//         {/* Recent Activity Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-medium mb-2">Recent Activity</h2>
//           <ul>
//             <li>Logged in 1 hour ago</li>
//             <li>Updated profile yesterday</li>
//             {/* Add more activity items as needed */}
//           </ul>
//         </div>

//         {/* Other Cards */}
//         {/* Add more cards for different sections of the dashboard */}
//       </div>
//     </div>
//   </>
//   );
// }

