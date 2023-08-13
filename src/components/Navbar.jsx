import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const {currentUser, logout} = UserAuth()
    const navigate = useNavigate()
    const  handleLogout = async () => {
        try {
         await logout()
         navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Chat Room</a>
                {currentUser ? <button onClick={handleLogout} className='btn btn-neutral '>Logout</button> : ""}
                
            </div>
        </div>
    )
}

export default Navbar