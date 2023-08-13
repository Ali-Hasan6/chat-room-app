import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firbase'

function SendMessages() {
    const [value, setValue] = useState('')

    const {currentUser} = UserAuth()
   
    const handleSubmit =  async (e) => {

        if(value.trim() ==='') {
            alert('Please Enter A Valid Message')
            return;
        }
        e.preventDefault() 
        setValue('')

        try {
             const  {uid, displayName, photoURL} = currentUser
            await addDoc(collection( db, 'messages'), {
              text: value,
              name: displayName,
              picture: photoURL,
              createdAt: serverTimestamp(),
              uid,
            })
          } catch(error) {
              console.log(error)
          }
    }
  return (
    <div className=' bg-gray-200 text-black w-full fixed bottom-0 py-10'>
        <div className=' containerWrap'>
            <form onSubmit={handleSubmit} className=' flex px-4'>
                <input value={value} onChange={e => setValue(e.target.value)} className='input focus:outline-none w-full rounded rounded-r-none shadow-lg' type="text" placeholder='send message' />
                <button className='w-auto p-3 text-sm btn btn-neutral rounded-l-none'>send</button>
            </form>
        </div>
    </div>
  )
}

export default SendMessages