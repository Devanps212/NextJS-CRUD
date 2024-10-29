import connectDB from "@/libs/mongoose"
import model from "@/models/todo"
import { NextResponse } from "next/server"

interface Params {
    id:string
}

export async function GET(req:Request,{params} : {params: Params}){
    try{
        await connectDB()
        const {id} = params

        const data = await model.find({_id:id})
        if(!data){
            return NextResponse.json({error:"Data not found"}, {status: 404})
        }

        return NextResponse.json({message:"success", data})
    }catch(error){
        return NextResponse.json({error}, {status:500})
    }
    
}

export async function DELETE (req :Request, params:Params){
    try{
        await connectDB()
        const {id} = params

        const data = await model.findByIdAndDelete({_id:id})

        if(!data){
            return NextResponse.json({error:"no file found"}, {status:404})
        }

        return NextResponse.json({message:"Item deleted successfully"}, {status:200})
        
    }catch(error){
        return NextResponse.json({error:error},{status:500})
    }
}

export async function PUT (req :Request){
    try{
        await connectDB()
        const { id, title, description } = await req.json()

        const data = await model.findByIdAndUpdate({_id:id}, {title, description})

        if(!data){
            return NextResponse.json({error:"no file found"}, {status:404})
        }

        return NextResponse.json({message:"Item updated successfully"}, {status:200})
        
    }catch(error){
        return NextResponse.json({error:error},{status:500})
    }
}