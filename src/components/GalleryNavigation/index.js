import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
  return (
    <>
      <h1>Galleries</h1>
      <nav>
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        {galleries.records.map((gallery) => {
          return (
            <NavLink
              to={`/galleries/${gallery.id}`}
              key={gallery.id}
              className="gallery"
            >
              {gallery.name.replace("â€“", " -")}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

export default GalleryNavigation;
