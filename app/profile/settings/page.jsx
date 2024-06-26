import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { TabsDemo } from './Infopage'
export async function generateMetadata({ params }) {
  return {
    title: 'Settings',
  }
}
export default function page() {
  return (
    <>
    <div className="main">
      <div className="sHeader p-3">
        <h1 className='flex items-center gap-1 text-lg font-semibold'><IoSettingsOutline /> Settings</h1>
      </div>
      <div className="stthingBody">
        <TabsDemo/>
      </div>
    </div>

    </>
  )
}
