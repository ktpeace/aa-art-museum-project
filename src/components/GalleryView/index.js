import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  let { artId } = useParams();
  const currentGallery = galleries.find((gallery) => galleryId == gallery.id);
  if (!currentGallery) return <h2>Page Not Found</h2>;
  if (artId) {
    return <ArtDescription gallery={currentGallery} artId={artId} />;
  }
  return (
    <>
      <h1>GalleryView</h1>
      <h2>{currentGallery.name.replace("â€“", " -")}</h2>
      {currentGallery.objects.map((artwork) => {
        return <ArtImageTile art={artwork} key={artwork.id} />;
      })}
    </>
  );
}

export default GalleryView;
