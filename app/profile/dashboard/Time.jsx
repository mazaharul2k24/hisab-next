"use client"
import React, { useState } from 'react'
export default function Time() {
    const [time,setTime]=useState("")
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)


  return (
    <p className='font-bold text-2xl shadow-md border rounded-md w-fit mx-auto py-1 mb-2  px-4 text-center'>{time && time}</p>
  )
}
