import Link from "next/link"

export default function newArticle(){
    return (
        <div>
        <h1>News article id</h1>
        <p>Reading in lannguage</p>

        <div>
        <Link href="/article/id?lang=en">English</Link>
        <Link href="/article/id?lang=es">Spanish</Link>
        <Link href="/article/id?lang=fr">French</Link>
        </div>
        </div>
    )
}