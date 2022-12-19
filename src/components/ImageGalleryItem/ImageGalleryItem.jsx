import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(pS => ({
      isOpen: !pS.isOpen,
    }));
  };

  render() {
    const { smallImage, largeImage } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <div onClick={this.toggle}>
          <img className={css.imgSmall} src={smallImage} alt="images" />
        </div>
        {isOpen && (
          <Modal onClose={this.toggle}>
            <img src={largeImage} className={css.imgLarge} alt="images" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
