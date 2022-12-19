import axios from 'axios';

export const getImages = async (value, page) => {
  const response = await axios({
    url: 'https://pixabay.com/api',
    params: {
      q: value,
      page: page,
      key: process.env.REACT_APP_API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};
