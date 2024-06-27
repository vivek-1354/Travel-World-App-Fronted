import { HotelCard, Navbar } from "../../components";
import './Home.css'


import React from 'react'

export const Home = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <HotelCard />
            </main>
        </>

    )
}
