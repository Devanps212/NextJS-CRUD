import connectDB from "@/libs/mongoose"
import model from "@/models/todo"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    try{
        console.log("reached router function")
        const { title, description } = await req.json()
        await connectDB()
        await model.create({title, description})
        return NextResponse.json({message:"Topic created"}, {status:201})

    }catch(error){
        return NextResponse.json({error}, {status:500})
    }
}

export async function GET(){
    try{
        await connectDB()
        const data = await model.find()
        return NextResponse.json({data}, {status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({error})
    }
}