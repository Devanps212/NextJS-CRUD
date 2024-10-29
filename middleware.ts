import { NextRequest, NextResponse } from "next/server";
import { validation } from "./app/middleware/validation";

export async function middleware(req: NextRequest){

    console.log(req.nextUrl.pathname)
    if(req.nextUrl.pathname.startsWith('/api/topic') && ['PUT', 'POST'].includes(req.method)){
        const validationResponse = await validation(req)

        if(validationResponse){
            return validationResponse
        }
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: ['/api/topics', '/api/topics/:id*']
}