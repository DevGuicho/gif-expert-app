import React, { useState } from 'react';
import AddCategory from './AddCategory/index';
import GifGrid from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
