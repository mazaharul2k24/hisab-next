import React from 'react'
export async function generateMetadata({ params }) {
    return {
      title: 'Users',
    }
  }
export default function page() {
  return (
    <div>Users page</div>
  )
}
