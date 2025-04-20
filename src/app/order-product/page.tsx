"use client"

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router =useRouter();
    const handleClick = ()=>{
        console.log("Placing your order");
        router.push("/")
    }
    return<>
    <h1>Order Product</h1>
    <button className="border border-black-800 px-2 py-1 rounded-md" onClick={handleClick}>Place order</button>
    </> 
} 