import Image from "next/image";
import wondersImages from "../wonders";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = wondersImages.find((p) => p.id === params.id);

  if (!photo) {
    return (
      <div className="container mx-auto my-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Photo not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="p-6 text-center">
          <h1 className="text-3xl font-bold">{photo.name}</h1>
        </header>

        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />

        <section className="p-6 bg-gray-50 space-y-2 text-center">
          <h3 className="text-gray-700 text-sm">{photo.photographer}</h3>
          <h3 className="text-gray-600 text-sm">{photo.location}</h3>
        </section>
      </div>
    </div>
  );
}
