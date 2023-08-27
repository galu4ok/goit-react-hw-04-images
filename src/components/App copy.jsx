// import { Component } from 'react';
// import { GalleryWrapper } from './App.styled';
// import { getSearchImages } from './Api';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { SearchBar } from './Searchbar/Searchbar';
// import { LoadButton } from './Button/LoadButton';
// import { Loader } from './Loader/Loader';
// import { Toaster } from 'react-hot-toast';
// import { success, error, warning } from './Toaster/Toaster';

// export class App extends Component {
// state = {
//   query: '',
//   images: [],
//   page: 1,
//   isLoading: false,
// };
//Метод для здійснення пошукового запиту
// changeQuery = newQuery => {
//   this.setState({
//     //додаємо перед пошуковим запитом унікальний ідентифікатор
//     query: `${Date.now()}/${newQuery}`,
//     //очищаємо при сабміті форми попередню колекцію зображень та скидаємо номер сторінки до початкової
//     images: [],
//     page: 1,
//   });
// };
// componentDidUpdate = async (prevProps, prevState) => {
//   //якщо змінився критерій пошуку або номер сторінки, то робимо HTTP-запит
//   if (
//     prevState.query !== this.state.query ||
//     prevState.page !== this.state.page
//   ) {
//     // console.log(`HTTP-запит за ${this.state.query} и ${this.state.page}`);
//     this.loadImages();
//   }
// };
// `HTTP запит  за ${this.state.query} і page=${this.state.page}`
// loadImages = async () => {
//   this.setState({ isLoading: true });
//   try {
//     const searchedImages = await getSearchImages(
//       this.state.query,
//       this.state.page
//     );
//     // console.log('searchedImages', searchedImages);
//     if (searchedImages.length) {
//       this.setState(prevState => ({
//         images:
//           this.state.page > 1
//             ? [...prevState.images, ...searchedImages]
//             : searchedImages,
//         isLoading: false,
//       }));
//       success();
//     } else {
//       error();
//       this.setState({ isLoading: false });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// handleSubmit = evt => {
//   evt.preventDefault();
//   if (evt.target.elements.query.value.trim() === '') {
//     warning();
//     return;
//   }
//   this.changeQuery(evt.target.elements.query.value);
//   evt.target.reset();
// };
//Метод, що збільшує значення сторінки на 1
// handleLoadMore = () => {
//   this.setState(prevState => ({ page: prevState.page + 1 }));
// };
// render() {
//   const { images, isLoading } = this.state;
//   return (
//     <GalleryWrapper>
//       <SearchBar onSubmit={this.handleSubmit} />
//       {isLoading && <Loader />}
//       {images.length > 0 && <ImageGallery images={images} />}
//       {images.length > 0 && !isLoading && (
//         <LoadButton onClick={this.handleLoadMore} />
//       )}
//       <Toaster />
//     </GalleryWrapper>
//   );
// }
// }
