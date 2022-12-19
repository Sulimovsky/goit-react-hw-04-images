import axios from 'axios';

const API_KEY = '32195228-7dac30a9769b6b3eee1b5812b';

export const getImages = async (value, page) => {
  const response = await axios({
    url: 'https://pixabay.com/api/',
    params: {
      q: value,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};
