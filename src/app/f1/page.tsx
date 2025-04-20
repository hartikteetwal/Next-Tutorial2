import Link from "next/link";

export default function F1(){
    return <>
    <h1>F1 page</h1>
    <div>
        <Link className="mb-4" href={"/f1/f2"}>F2</Link><br />
        <Link href={"/f3"}>F3</Link>
    </div>
    </>
}