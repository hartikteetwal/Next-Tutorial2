import Link from "next/link";
import wondersImages from "./wonders";
import Image from "next/image";

export default function Page() {
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">New Wonders of the World</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wondersImages.map(({ id, src, name }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image 
                            alt={name} 
                            src={src} 
                            className="w-full object-cover aspect-square rounded-lg" 
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
