export default function SelectionListTitles({ selectedPhotos }) {
  return (
    <div className="list">
      <ol>
        {selectedPhotos.map((photo) => {
          return <li key={photo.title}>{photo.title}</li>;
        })}
      </ol>
    </div>
  );
}
