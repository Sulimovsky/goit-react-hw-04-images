import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <nav className={css.nav}>
        <a href="https://pixabay.com/">
          <img
            src="https://pixabay.com/static/img/public/leaderboard_b.png"
            alt="Pixabay"
            width="350"
          />
        </a>
      </nav>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button} aria-label="search">
          <AiOutlineSearch size="24" />
        </button>

        <input
          className={css.input}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
