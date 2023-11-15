/** Custom Components */
import SelectionList from "./SelectionList";
import SelectionListTitles from "./SelectionListTitles";

export default function SelectionContainer({ actions, selectedPhotos }) {
  return (
    <>
      <h3>Album Generator</h3>
      <div className="selection-content-container">
        <SelectionList actions={actions} selectedPhotos={selectedPhotos} />
        <SelectionListTitles selectedPhotos={selectedPhotos} />
      </div>
    </>
  );
}
