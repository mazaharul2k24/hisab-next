import React from 'react'
import {TableDemo} from './InTable'
import { InvoiceTable } from '@/app/invoices/InvoiceTable'
export async function generateMetadata({ params }) {
    return {
      title: 'Invoices',
    }
  }

export default function page() {
  return (
    <>
    <TableDemo/>

      
      
       </>
  )
}
