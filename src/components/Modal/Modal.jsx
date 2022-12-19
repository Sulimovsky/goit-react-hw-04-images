import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalKeydown);
  }

  handleModalKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target.nodeName === 'IMG' || e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
