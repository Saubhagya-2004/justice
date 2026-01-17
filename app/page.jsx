'use client'
import Empower from './components/Empower'
import Legal from './components/Legal'
import Poster from './components/poster'
import React from 'react'
import Process from './components/Process'
import Mission from './components/Mission'
const page = () => {
  return (
    <div className='scroll-smooth bg-white'>
     <Poster/>
     <Empower/>
     <Legal/>
     <Process/>
     <Mission/>
    </div>
  )
}

export default page
