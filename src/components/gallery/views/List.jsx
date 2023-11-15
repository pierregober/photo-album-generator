import { useEffect, useState } from "react";

/** Custom Components */
import GalleryList from "../cards/GalleryList";

export default function Gallery({
  actions,
  loading,
  photos,
  setSelectedPhotos,
}) {
  return (
    <>
      <GalleryList
        actions={actions}
        loading={loading}
        photos={photos}
        setSelectedPhotos={setSelectedPhotos}
      />
    </>
  );
}
