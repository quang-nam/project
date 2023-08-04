
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post"

export const GET= async(req,{params})=>{
    const {id}= params;
    //console.log(id)
    try {
        await connect()
        const post= await Post.findById(id)
        return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {
        return new NextResponse("Server error",{status:500})
    }
}

export const DELETE= async(req,{params})=>{
    const {id}= params;
    //console.log(id)
    try {
        await connect()
        await Post.findByIdAndDelete(id)
        return new NextResponse("Post has been deleted",{status:200})
    } catch (error) {
        return new NextResponse("Server error",{status:500})
    }
}