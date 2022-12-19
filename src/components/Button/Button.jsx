import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onAddPage }) => {
  return (
    <div className={css.box}>
      <button type="button" className={css.btn} onClick={onAddPage}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onAddPage: PropTypes.func.isRequired,
};

export default Button;
