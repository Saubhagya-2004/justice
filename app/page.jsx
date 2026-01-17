'use client'
import Empower from './components/Empower'
import Legal from './components/Legal'
import Poster from './components/poster'
import React from 'react'
import Process from './components/Process'
import Mission from './components/Mission'
import Resource from './components/Resource'
import Customer from './components/Customer'
import Contact from './components/Contact'
const page = () => {
  return (
    <div className='scroll-smooth bg-white'>
     <Poster/>
     <Empower/>
     <Legal/>
     <Process/>
     <Mission/>
     <Resource/>
     <Customer/>
     <Contact/>
    </div>
  )
}

export default page
