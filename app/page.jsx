'use client'
import Empower from './components/Empower'
import Legal from './components/Legal'
import Poster from './components/poster'
import React from 'react'
const page = () => {
  return (
    <div className='scroll-smooth bg-white'>
     <Poster/>
     <Empower/>
     <Legal/>
    </div>
  )
}

export default page
