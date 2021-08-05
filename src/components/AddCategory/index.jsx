import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import './styles.css';

const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState({
    category: '',
  });
  const [error, setError] = useState(false);

  const { category } = inputValue;

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categories.includes(inputValue.category)) {
      setError(true);
      return;
    }
    setCategories((prevState) => [inputValue.category, ...prevState]);
    setError(false);
    setInputValue({ category: '' });
  };

  return (
    <form className={`search ${error && 'error'}`} onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        name="category"
        id="category"
        onChange={handleChange}
        value={category}
      />
      <button className="search__button">
        <MdSearch size="25px" />
      </button>
    </form>
  );
};

export default AddCategory;
