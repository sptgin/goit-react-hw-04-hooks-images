import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchImage, setSearchImage] = useState('');

  const handlerChange = event => {
    setSearchImage(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    if (searchImage.trim() === '') {
      alert('Please, enter some for search image ... ');
      return;
    }
    onSubmit(searchImage);
    setSearchImage('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={searchImage}
          type="search"
          placeholder="Search images and photos"
          onChange={handlerChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
