import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      return;
    }
    this.props.onSubmit(value);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
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
        <form className={css.form} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
