import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Section from 'components/common/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const App = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [totalImg, setTotalImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value === '') {
      return;
    }
    (async function () {
      try {
        setIsLoading(true);
        const respone = await API.getImages(value, page);
        if (respone.hits.length === 0) {
          toast.error('Enter the correct value.');
        }
        setImages(pS => [...pS, ...respone.hits]);
        setTotalImg(respone.total);
      } catch {
        toast.error(
          'Something went wrong. Reload the page and try again, please.'
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [value, page]);

  const getNewImages = async value => {
    setValue(value);
    setPage(1);
    setImages([]);
  };

  const totalHits = images.length === totalImg;
  return (
    <>
      <Searchbar onSubmit={getNewImages} />
      <Section>
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length !== 0 && !totalHits && (
          <Button onAddPage={() => setPage(pS => pS + 1)} />
        )}
      </Section>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
