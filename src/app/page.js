"use client"
import "./globals.css"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Here is your toast.');

export default function Home() {
  return (
    <>
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </>
  );
}
