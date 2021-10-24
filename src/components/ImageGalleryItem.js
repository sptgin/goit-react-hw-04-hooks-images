export default function ImageGalleryItem({ item, handleImageClick }) {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => handleImageClick(largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
