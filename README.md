# Frontend Application for Microservices-based Project

## Overview

This is the frontend of a microservices-based application built using ReactJS, NextJS, and TailwindCSS. The application integrates with two backend microservices: the **Auth Service** and **Play Service**.

### Features

- **Registration**: Allows users to register with an email and password.
- **Login**: Users can authenticate themselves and receive a JWT token for session management.
- **Landing Page**: 
  - Users can add their preferences (hobbies, skills, etc.).
  - View their profile information.
  - See similar profiles based on shared preferences.

### Tech Stack

- **ReactJS**
- **NextJS**
- **TailwindCSS**
- **Axios** for API integration
- **JWT** for token authentication

### Requirements

- **Node.js v20** or higher
- Backend microservices (Auth and Play) running on ports 3001 and 3002

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MOONCHILD2403/Wallt_frontend.git
   cd frontend-app 
<br>

2. **Install dependencies and run**:
   ```bash
   npm install
   npm run dev
<br>

### Folder Structure
- components/
  - PreferenceForm.js
  - Profile.js
  - SimilarProfiles.js
- pages/
  - index.js (Login Page)
  - register.js (Registration Page)
  - landing.js (Landing Page with profile and preferences)
- styles/ (Custom TailwindCSS styles)

