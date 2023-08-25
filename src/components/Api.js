import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38297408-262b633b3336e15c299396762';

// Функція getSearchImages(), яка виконує HTTP-запит та отримує пошукове зображення

export const getSearchImages = async (query, page) => {
  ///виокремлюємо req-id/ від query (див.20 рядок App.jsx)
  const slashIndex = query.indexOf('/');
  const enteredQuery = query.slice(slashIndex + 1);
  // console.log('enteredQuery:', enteredQuery);
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: enteredQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
