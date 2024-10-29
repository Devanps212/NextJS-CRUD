import { NextResponse } from "next/server";

export async function validation(req:Request){
    console.log(req.method)
    const {title, description} = await req.json()
    if(title === '' || description === ''){
        console.log("title or description not found")
        return NextResponse.json({error:"Title or description should be valid"}, {status:400})
    }
    return null
}