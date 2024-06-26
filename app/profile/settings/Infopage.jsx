"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"

export function TabsDemo() {
    const [adminInfo,setAdmininfo]=useState([])
    const [error,setError]=useState("")
    
    useEffect(()=>{
        const getAdmininbfo=async()=>{
            const res=await fetch("/api/admin/info")
            if(res.ok){
                const jsconvert=await res.json()
                setAdmininfo(jsconvert.data)
            }else{
                setError("Error try again")
                console.log("88")
            }
        }
        getAdmininbfo()
    },[])
    



  return (
   <>
    {adminInfo && (
        <Tabs defaultValue="account" className="md:w-[500px] w-[95%]   p-4 mx-auto mt-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Info</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={adminInfo.name} />
              </div>
  
              <div className="space-y-1">
                <Label htmlFor="username">Email address</Label>
                <p className="border rounded-md px-4 py-1 bg-gray-100">{adminInfo.email}</p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Phone</Label>
                <Input id="username" defaultValue={adminInfo.phone} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Address</Label>
                <Input id="username" defaultValue={adminInfo.address} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Role</Label>
                <p className="border rounded-md px-4 py-1 bg-gray-100">Admin</p>
              </div>
  
            </CardContent>
            <CardFooter>
              <Button >Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    )}
   </>
  
  )
}
