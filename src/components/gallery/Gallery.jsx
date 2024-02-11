import { useMediaQuery } from "@uidotdev/usehooks";
import DesktopGallery from "./desktop-gallery/DesktopGallery";
import MobileGallery from "./mobile-gallery/MobileGallary";

function Gallery() {
  const isSmallDevice = useMediaQuery("(max-width : 800px)");

  return isSmallDevice ? <MobileGallery /> : <DesktopGallery />;
}

export default Gallery;
