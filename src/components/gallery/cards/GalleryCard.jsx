/** Vendors */
import Image from "next/image";
import { useDrag } from "react-dnd";

export default function GalleryCard({ photo }) {
  const [, drag] = useDrag(() => ({
    type: "image",
    item: photo,
  }));
  return (
    <div ref={drag}>
      <Image
        alt={photo.description}
        height={200}
        objectFit="cover"
        src={photo.url}
        width={200}
      />
    </div>
  );
}
