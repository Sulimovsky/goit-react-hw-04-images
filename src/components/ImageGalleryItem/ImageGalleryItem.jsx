import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(pS => !pS);
  };

  return (
    <>
      <div onClick={toggle}>
        <img className={css.imgSmall} src={smallImage} alt="images" />
      </div>
      {isOpen && (
        <Modal onClose={toggle}>
          <img src={largeImage} className={css.imgLarge} alt="images" />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
