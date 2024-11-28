import React from 'react'
import { Routes, Route } from 'react-router'

import { NoteIndex } from './pages/NoteIndex.jsx'
import { MenuBar } from './cmps/MenuBar.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <MenuBar/>
            {/* <UserMsg /> */}

            <main>
                <Routes>
                    {/* <Route path="" element={<HomePage />} /> */}
                    <Route path="" element={<NoteIndex />} />
                    {/* <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route> */}
                    {/* <Route path="car/:carId" element={<CarDetails />} /> */}
                    {/* <Route path="user/:id" element={<UserDetails />} /> */}
                    {/* <Route path="review" element={<ReviewIndex />} /> */}
                    {/* <Route path="chat" element={<ChatApp />} /> */}
                    {/* <Route path="admin" element={<AdminIndex />} /> */}
                    {/* <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route> */}
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}

