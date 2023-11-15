//** Custom Components */
import GalleryCard from "./GalleryCard";
import SkeletonLoader from "../../shared/loader/Skeleton";

export default function GalleryList({ loading, photos }) {
  return (
    <div className="gallery-container hide-scrollbar">
      {loading
        ? new Array(100)
            .fill(null)
            .map((_, i) => <SkeletonLoader key={`skeleton-${i}`} />)
        : photos?.map((photo) => {
            return (
              <GalleryCard loading={loading} key={photo.id} photo={photo} />
            );
          })}
    </div>
  );
}
