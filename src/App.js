import { Route, Routes } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import Home from "./home";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/galleries/:galleryId/*"
          element={<GalleryView galleries={harvardArt.records} />}
        >
          <Route
            path="art/:artId"
            element={<GalleryView galleries={harvardArt.records} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
