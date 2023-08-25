import { Component } from 'react';
import { getSearchImages } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadButton } from './Button/LoadButton';
import { GalleryWrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  //Метод для здійснення пошукового запиту
  changeQuery = newQuery => {
    this.setState({
      //додаємо перед пошуковим запитом унікальний ідентифікатор
      query: `${Date.now()}/${newQuery}`,
      //очищаємо при сабміті форми попередню колекцію зображень та скидаємо номер сторінки до початкової
      images: [],
      page: 1,
    });
  };

  //Не забываем отрезать req-id/ от query
  componentDidUpdate = async (prevProps, prevState) => {
    //якщо змінився критерій пошуку або номер сторінки, то робимо HTTP-запит
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // console.log(`HTTP-запит за ${this.state.query} и ${this.state.page}`);
      this.loadImages();
    }
  };
  // `HTTP запит  за ${this.state.query} і page=${this.state.page}`
  loadImages = async () => {
    try {
      const searchedImages = await getSearchImages(
        this.state.query,
        this.state.page
      );
      // console.log('searchedImages', searchedImages);
      if (searchedImages.length) {
        this.setState(prevState => ({
          images:
            this.state.page > 1
              ? [...prevState.images, ...searchedImages]
              : searchedImages,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  //Метод, що збільшує значення сторінки на 1
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <GalleryWrapper>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <LoadButton onClick={this.handleLoadMore}>Load more</LoadButton>
      </GalleryWrapper>
    );
  }
}
