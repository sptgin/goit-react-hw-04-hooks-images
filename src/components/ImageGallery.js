import { useState, useEffect } from 'react';
import imageSearchAPI from '../services/api';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import SpinnerLoader from './Loader';
import Button from './Button';
import { Notification } from 'react-pnotify';

const imagesearch = new imageSearchAPI();

export default function ImageGallery({ searchQuery }) {
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [searchElements, setSearchElements] = useState(null);
  const [status, setStatus] = useState('init');
  const [imageLargeURL, setImageLargeURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    imagesearch.resetPage();
    imagesearch.searchQuery = searchQuery;
    imagesearch.search().then(searchResultArray => {
      if (searchResultArray.hits.length > 0) {
        setSearchResultArray(searchResultArray.hits);
        setSearchElements(searchResultArray.total);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('No images found ...');
      }
    });
  }, [searchQuery]);

  const handleImageClick = image => {
    setImageLargeURL(image);
    setStatus('showmodal');
  };

  const onModalClose = () => {
    setStatus('success');
  };

  const handleMoreButtonClick = event => {
    imagesearch.page = 1;
    imagesearch
      .search()
      .then(searchResultArray => {
        setSearchResultArray(prev => [...prev, ...searchResultArray.hits]);
        setStatus('success');
        Button();
      })
      .catch(error => {
        setStatus('error');
        setErrorMessage(error);
      });
  };

  if (status === 'init') {
    return <h1 className="title"></h1>;
  }

  if (status === 'pending') {
    return <SpinnerLoader />;
  }

  if (status === 'success') {
    return (
      <>
        <ul className="ImageGallery">
          {searchResultArray.map(element => (
            <ImageGalleryItem
              key={element.id}
              item={element}
              handleImageClick={handleImageClick}
            />
          ))}
        </ul>
        {searchElements > 12 && (
          <button
            className="Button"
            type="button"
            id="more"
            onClick={handleMoreButtonClick}
          >
            load more
          </button>
        )}
      </>
    );
  }

  if (status === 'showmodal') {
    return <Modal largeImageURL={imageLargeURL} onModalClose={onModalClose} />;
  }

  if (status === 'error') {
    return <Notification type="Error" title="Error" text={errorMessage} />;
  }
}
