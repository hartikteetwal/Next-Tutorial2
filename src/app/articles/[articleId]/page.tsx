// // ----> use in server site
// import Link from "next/link";

// type Props = {
//   params: { articleId: string };
//   searchParams: { lang?: "en" | "es" | "fr" };
// };

// export default function NewArticle({ params, searchParams }: Props) {
//   const { articleId } = params;
//   const { lang = "en" } = searchParams;

//   return (
//     <div>
//       <h1>News Article {articleId}</h1>
//       <p>Reading in {lang.toUpperCase()}</p>

//       <div>
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link><br />
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link><br />
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//       </div>
//     </div>
//   );
// }


// ----> use in Client site
"use client";

import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";

export default function NewArticle() {
  const searchParams = useSearchParams();
  const params = useParams();

  const articleId = params.articleId as string;
  const lang = (searchParams.get("lang") as "en" | "es" | "fr") || "en";

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang.toUpperCase()}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link><br />
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link><br />
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}


