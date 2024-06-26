"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import Link from "next/link"
  import Image from "next/image"
import { useEffect,useState } from "react"
import { GrView } from "react-icons/gr";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


  
  export function TableDemo() {
    const [invoices,setInvoices]=useState([])
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
      setLoading(true)
      const getAlldata=async()=>{
        const fechbQuery=await fetch("/api/admin/getinvoices");
        if(fechbQuery.ok){
          const jsCon=await fechbQuery.json()
          if(fechbQuery.status==200){
            setInvoices(jsCon.data)
            setError("")
            setLoading(false)
          }else if(fechbQuery.status==201){
            setInvoices([])
            setLoading(false)
            setError("Connection Error")
          }
        }else{
          setInvoices([])
          setLoading(false)
          setError("Connection Error")
        }



      }

      getAlldata();

    },[])


    const handleDelete=(a)=>{
      confirm("Are you sure?")
    }


    return (
  <>
  <div className="shadow-md border rounded-md mt-3">
  <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice No.</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead> name</TableHead>
            <TableHead> Phone </TableHead>
            <TableHead >Address</TableHead>
            <TableHead >Date</TableHead>
            <TableHead >Total</TableHead>
            <TableHead >Manage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.buyerID}>
              <TableCell className="font-medium">#{invoice.buyerID}</TableCell>
              <TableCell >
            {
            invoice.buyerStatus=="paid" ? 
              <p className="bg-green-200 rounded-full text-center">{invoice.buyerStatus}</p>
            :<p className="bg-red-200 rounded-full text-center">{invoice.buyerStatus}</p>
            }

              </TableCell>
              <TableCell ><p className="bg-blue-200 rounded-full text-center">Cash</p></TableCell>
              <TableCell>{invoice.buyerName}</TableCell>
              <TableCell>{invoice.buyerPhone}</TableCell>
              <TableCell>{invoice.buyerAddress}</TableCell>
              <TableCell>{invoice.insertDate}</TableCell>
              <TableCell>99999</TableCell>
              <TableCell className="text-right flex items-center gap-2 justify-between">
                <Link  href={`/invoic-details/${invoice.buyerID}`} className=" bg-green-500 px-2 py-1 rounded-sm text-gray-100"><GrView/></Link>
                <Link href={'#'} className=" bg-yellow-500 px-2 py-1 rounded-md text-gray-200"><MdOutlineModeEdit/></Link>
                <Link onClick={handleDelete} href={'#'} className=" bg-red-500 px-2 py-1 rounded-md text-gray-100"><RiDeleteBinLine/></Link>
               
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  </div>
  </>
    )
  }
  