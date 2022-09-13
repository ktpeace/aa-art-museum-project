import { Link } from "react-router-dom";

function ArtDescription({ gallery, artId }) {
  const artwork = gallery.objects.find((thisArtwork) => {
    return thisArtwork.images[0].imageid == artId;
  });
  console.log(artwork);
  return (
    <>
      <a href={artwork.url}>
        <h1>{artwork.title}</h1>
      </a>
      <ul>
        <li>Period: {artwork.period || "[not available]"}</li>
        <li>Medium: {artwork.medium || "[not available]"}</li>
        <li>Description: {artwork.description || "[not available]"}</li>
        <li>Condition: {artwork.verificationleveldescription}</li>
      </ul>
      {artwork.images.map((image) => {
        return (
          <img
            src={image.baseimageurl}
            key={image.imageid}
            alt={image.medium}
            style={{ maxWidth: "1500px" }}
          />
        );
      })}
      <div>
        <Link to={`/galleries/:galleryId`}>Back to Gallery</Link>
      </div>
    </>
  );
}
// records:[{ objects: [{ images:[{}] }] }]
export default ArtDescription;
