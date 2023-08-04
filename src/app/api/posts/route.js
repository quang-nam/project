
import Post from "@/models/Post"

import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const GET= async(request)=>{
  //  const url= new URL(request.url)
   // const username= url.searchParams.get('username')
   const url = new URL(request.url)
   const username= url.searchParams.get('username')
   console.log(username)
    try {
        await connect()
        const posts= await Post.find(username && {username})
       return new NextResponse(JSON.stringify(posts),{status:200})
    } catch (error) {
        return new NextResponse("Server is error")
    }
}

export const POST = async(request)=>{
    const body = await request.json();
    const newPost= new Post(body);
    try {
        await connect();
        await newPost.save()
        return new NextResponse("Post has been created successfully",{status: 201})
    } catch (error) {
        return new NextResponse("Database error",{status:500})
    }
}