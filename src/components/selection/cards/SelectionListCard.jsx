import { useState } from "react";

/** Vendors */
import Image from "next/image";

/** Icons */
import TrashIcon from "../../../../public/icons/Trash";

export default function SelectionListCard({ photo, actions }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <Image
        alt={photo.title}
        className="dropped-image"
        height={200}
        key={photo.id}
        objectFit="cover"
        src={photo.url}
        width={200}
      />
      {isHovered && (
        <button className="delete" onClick={() => actions.onDelete(photo)}>
          <TrashIcon />
        </button>
      )}
    </div>
  );
}
