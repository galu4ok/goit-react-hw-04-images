import { ImageGalleryCard } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, ImageGalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id}>
          <ImageGalleryCard image={image} />
        </ImageGalleryItem>
      ))}
    </ImageGalleryList>
  );
};
