import React from 'react'
import Link from 'next/link'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProduct } from 'react-icons/ai';
import { LuUsers } from 'react-icons/lu';
import { TbFileInvoice } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';



export default function Mobilenav() {
  return (
    <div className='flex  py-3 px-3 justify-between items-center'>
      <div className="header col-span-1">
        <h1 className='text-lg'>HISAB</h1>
      </div>
      <div className="body col-span-4 flex gap-4">

        <Link href={'/profile/dashboard'}>
        <IoHomeOutline className='text-2xl'/>
        </Link>
        <Link href={'/profile/invoices'}>
        <TbFileInvoice className='text-2xl'/>
        </Link>
        <Link href={'/profile/users'}>
        <LuUsers className='text-2xl'/>
        </Link>
        <Link href={'/profile/add-product'}>
        <AiOutlineProduct className='text-2xl'/>
        </Link>
        <Link href={'/profile/settings'}>
        <IoSettingsOutline className='text-2xl'/>
        </Link>
       
        <Link href={'/profile/logout'} className='text-right'>
        <MdLogout className='text-2xl  text-red-500'/>
        </Link>
       

      </div>
    </div>
  )
}
