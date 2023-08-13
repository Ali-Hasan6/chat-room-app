import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {currentUser,googleSignIn} = UserAuth()

    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            await googleSignIn()
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(()=> {
        if(currentUser) {
            navigate('/chat')
        }
        
    }, [currentUser])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className='flex justify-center'>
                        <h1 className="text-5xl font-bold mr-3">Hello there </h1>
                        <p className='text-5xl animate-bounce'>👋</p>
                        </div>
                        <p className="py-6">Join the conversation, meet new people, and make connections in one shared room.</p>
                        <button onClick={handleLogin} className="btn btn-neutral hover:btn-primary">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login