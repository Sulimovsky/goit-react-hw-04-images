import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Section from 'components/common/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

class App extends Component {
  state = {
    page: 1,
    value: '',
    images: [],
    totalImg: null,
    isLoading: false,
  };

  async componentDidUpdate(pP, pS) {
    const { page, value } = this.state;

    if (pS.page !== page || pS.value !== value) {
      try {
        this.setState({ isLoading: true });
        const response = await API.getImages(value, page);
        if (response.hits.length === 0) {
          toast.error('Enter the correct value.');
        }
        this.setState(pS => ({
          images: [...pS.images, ...response.hits],
          totalImg: response.total,
        }));
      } catch (error) {
        toast.error(
          'Something went wrong. Reload the page and try again, please.'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getNewImages = async value => {
    this.setState({ value, page: 1, images: [] });
  };

  addPage = () => {
    this.setState(pS => ({
      page: pS.page + 1,
    }));
  };

  render() {
    const { images, isLoading, totalImg } = this.state;
    const totalHits = images.length === totalImg;
    return (
      <>
        <Searchbar onSubmit={this.getNewImages} />
        <Section>
          <ImageGallery images={images} />
          {isLoading && <Loader />}
          {images.length !== 0 && !totalHits && (
            <Button onAddPage={this.addPage} />
          )}
        </Section>
        <Toaster position="bottom-right" reverseOrder={false} />
      </>
    );
  }
}

export default App;
