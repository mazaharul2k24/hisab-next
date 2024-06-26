import { NextResponse } from "next/server";
import { Hisab_user_model } from "@/app/config/model/Hisabmodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";

export const  GET=async(req)=>{
    try {
        await Dbconnect()
        const getInfoquery=await Hisab_user_model.findOne({email:"expertmazaharul@gmail.com"})
        if(getInfoquery){
            return NextResponse.json({message:"Successfully fetch  data",data:getInfoquery},{status:200})
        }else{
            return NextResponse.json({message:"Faild fetch  data",data:getInfoquery},{status:201})
        }
    } catch (error) {
        return NextResponse.json({message:"Server error"},{status:500})
    }
}