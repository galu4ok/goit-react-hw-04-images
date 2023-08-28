import { useState, useEffect } from 'react';
import { GalleryWrapper } from './App.styled';
import { getSearchImages } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadButton } from './Button/LoadButton';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { success, error, warning } from './Toaster/Toaster';

const IMAGES_PER_PAGE = 12;

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewImages, setHasNewImages] = useState(false);

  const changeQuery = newQuery => {
    //додаємо перед пошуковим запитом унікальний ідентифікатор
    setQuery(`${Date.now()}/${newQuery}`);
    //очищаємо при сабміті форми попередню колекцію зображень та скидаємо номер сторінки до початкової
    setImages([]);
    setPage(1);
    //вказуємо, що при новому пошуковому запиті є нові зображення для завантаження
    setHasNewImages(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const enteredQuery = evt.target.elements.query.value.trim();
    if (!enteredQuery) {
      warning();
      return;
    }
    changeQuery(enteredQuery);
    evt.target.reset();
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
    // Після натискання на кнопку LoadMore вважаємо, що нові зображення були переглянуті
    setHasNewImages(false);
  };
  //Робимо HTTP-запит, якщо змінився критерій пошуку або номер сторінки
  useEffect(() => {
    //при першому рендері (коли query пустий рядок) не робимо запит
    if (!query) {
      return;
    }

    async function loadImages() {
      try {
        setIsLoading(true);
        const searchedImages = await getSearchImages(query, page);

        if (searchedImages.length) {
          setImages(prevState =>
            page > 1 ? [...prevState, ...searchedImages] : searchedImages
          );
          setHasNewImages(searchedImages.length >= IMAGES_PER_PAGE);
          success();
        } else {
          setHasNewImages(false);
          error();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, [query, page]);

  return (
    <GalleryWrapper>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && hasNewImages && (
        <LoadButton onClick={handleLoadMore} />
      )}
      <Toaster />
    </GalleryWrapper>
  );
};
