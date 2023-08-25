import { ImageGalleryItemImage } from './ItemGalleryItem.styled';

export const ImageGalleryCard = ({ image: { webformatURL, tags } }) => {
  return (
    <>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </>
  );
};
