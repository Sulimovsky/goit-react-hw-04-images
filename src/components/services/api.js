import axios from 'axios';

const API_KEY = '23597870-e543dfa35b3f83e92b336bdec';

export const getImages = async (value, page) => {
  const response = await axios({
    url: 'https://pixabay.com/api',
    headers: {
      Location: 'https://sulimovsky.github.io/goit-react-hw-03-image-finder/',
    },
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
