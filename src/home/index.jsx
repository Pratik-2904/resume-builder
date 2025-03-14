import React from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { UserButton } from '@clerk/clerk-react';
import Header from '../components/custom/Header';

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold">Welcome to Homepage</h1>

                <UserButton >
                    Go to Dashboard
                </UserButton>
            </div>
        </>
    )
}

export default HomePage

