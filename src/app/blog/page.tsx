import { Metadata } from "next"

export const metadata :Metadata ={
    title:{
        absolute:"Blog"
    }
}

export default async function blog(){
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Interntional delay!");
        }, 2000);
    })
    return <h1>I am blog</h1>
}