import { Link, useParams } from "react-router-dom";
import "./ArtImageTile.css";

function ArtImageTile({ art }) {
  const { galleryId } = useParams();
  if (art.images.length === 0) return null;
  const firstImage = art.images[0];
  return (
    <Link to={`/galleries/${galleryId}/art/${firstImage.imageid}`}>
      <img
        src={firstImage.baseimageurl}
        alt={firstImage.description}
        className="art-image"
      />
    </Link>
  );
}

export default ArtImageTile;
