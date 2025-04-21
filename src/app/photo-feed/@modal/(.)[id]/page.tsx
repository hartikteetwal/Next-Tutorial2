import Image from "next/image";
import wonderImages from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = wonderImages.find((p) => p.id === id);

  if (!photo) {
    return (
      <Modal>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-red-500">Photo not found</h2>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="p-4">
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square rounded-lg"
        />
        <div className="mt-4 space-y-1">
          <h2 className="text-xl font-semibold">{photo.name}</h2>
          <h3 className="text-gray-600 text-sm">{photo.photographer}</h3>
          <h3 className="text-gray-500 text-sm">{photo.location}</h3>
        </div>
      </div>
    </Modal>
  );
}
