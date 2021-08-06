import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import './styles.css';

const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categories.includes(inputValue)) {
      setError(true);
      return;
    }
    if (inputValue.trim().length < 2) {
      setError(true);
      return;
    }

    setCategories((prevState) => [inputValue.category, ...prevState]);
    setError(false);
    setInputValue('');
  };

  return (
    <form className={`search ${error && 'error'}`} onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        name="category"
        id="category"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="search__button">
        <MdSearch size="25px" />
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default AddCategory;
