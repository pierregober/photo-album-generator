/** Vendors */
import { useDrop } from "react-dnd";

/** Custom Components */
import SelectionContainer from "../cards/SelectionContainer";

export default function List({ onDrop, selectedPhotos, setSelectedPhotos }) {
  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => {
      if (monitor.canDrop()) {
        onDrop(item);
      }
    },
  }));

  const actions = {
    onDelete: (photoToDelete) => {
      setSelectedPhotos(
        selectedPhotos.filter((photo) => photo.id !== photoToDelete.id),
      );
    },
  };

  return (
    <div className="selection-container" ref={drop}>
      <SelectionContainer actions={actions} selectedPhotos={selectedPhotos} />
    </div>
  );
}
