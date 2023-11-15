/** Custom Components */
import SelectionListCard from "./SelectionListCard";

export default function SelectionList({ selectedPhotos, actions }) {
  return (
    <div className="images">
      {selectedPhotos.map((photo) => {
        return (
          <SelectionListCard actions={actions} key={photo.id} photo={photo} />
        );
      })}
    </div>
  );
}
