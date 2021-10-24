import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';

export default function App() {
  const [searchImage, setSearchImage] = useState('');

  const onSubmit = input => {
    setSearchImage(input);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery searchQuery={searchImage} />
    </div>
  );
}
