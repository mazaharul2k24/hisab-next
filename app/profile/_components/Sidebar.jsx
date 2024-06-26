"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoAddOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineProduct } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
export default function Sidebar() {
  return (
    <>
       <div className="main w-[220px] py-3 tracking-wide">
        <div className="hlogo">
          <h1 className='text-center'>HISAB</h1>
        </div>
        <div className="menu mt-4 py-4">
          <ul>

         <Link href={'/profile/'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 border border-gray-700 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <IoHomeOutline/>
              </div>
              <div className="text ">
               Dashboard
              </div>
            </li>
         </Link>
         <Link href={'/profile/invoices'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <TbFileInvoice/>
              </div>
              <div className="text">
               Invoices
              </div>
            </li>
         </Link>

         <Link href={'/profile/users'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <LuUsers />
              </div>
              <div className="text">
               Users
              </div>
            </li>
         </Link>

         <Link href={'/profile/add-product'}>
         <li className='flex gap-2 cursor-pointer items-center my-1  w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white'>
              <div className="incon">
              <IoAddOutline />
              </div>
              <div className="text">
               Add product
              </div>
            </li>
         </Link>
         <Link href={'/profile/settings'}>
         <li className='flex gap-2 cursor-pointer items-center my-1  w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <IoSettingsOutline />
              </div>
              <div className="text">
               Settings
              </div>
            </li>
         </Link>
         <Link href={'/profile/logout'}>
         <li className='flex gap-2 cursor-pointer items-center my-1  w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <MdLogout />
              </div>
              <div className="text">
               Logout
              </div>
            </li>
         </Link>

   

           


          </ul>
        </div>
       </div>
    </>
  )
}
