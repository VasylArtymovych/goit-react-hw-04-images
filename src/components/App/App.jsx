import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as Scroll from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Box } from 'components/Box/Box';
import { Searchbar } from 'components/Searchbar/';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Title } from 'components/Title';
import { CardContext } from 'components/Context';
import { IconButton } from '../IconButton';
import { useModal } from 'components/MyHooks';

const BASE_URL = 'https://pixabay.com/api/?';
const params = new URLSearchParams({
  key: '27181165-b46802ad165a0f6cfa045aac7',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

const statuses = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
};

const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(statuses.IDLE);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [tag, setTag] = useState('');
  const { isModalOpen, toggleModal } = useModal();

  const cardRef = useRef(null);

  useEffect(() => {
    if (!name) return;
    setStatus(statuses.PENDING);

    fetch(BASE_URL + `q=${name}&page=${page}&` + params)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error', response.status);
      })
      .then(data => {
        const images = data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );
        if (images.length !== 0) {
          if (page === 1) {
            toast.success(`We found ${data.totalHits} matches!`);
            setTotalImages(data.totalHits);
          }
          setImages(state => [...state, ...images]);
          setStatus(statuses.RESOLVE);
        } else {
          setStatus(statuses.REJECTED);
        }
      })
      .catch(error => alert(error.message));
  }, [name, page]);

  const handleSubmit = newnName => {
    if (name === newnName) {
      toast.info(`You already type the  name: ${newnName}`);
      return;
    }
    setName(newnName);
    setPage(1);
    setImages([]);
  };

  const handleImgClick = (largeImageUrl, tag) => {
    setLargeImageUrl(largeImageUrl);
    setTag(tag);
    toggleModal();
  };

  const scrollPage = () => {
    const element = cardRef.current;
    const height = element.offsetHeight;

    Scroll.animateScroll.scrollMore(height * 2, {
      smooth: 'linear',
    });
  };

  const loadMore = () => {
    setPage(state => state + 1);

    if (status === 'resolve') {
      scrollPage();
    }
  };

  const scrollToTopBtn = () => {
    Scroll.animateScroll.scrollToTop();
  };

  const countPages = useMemo(() => Math.ceil(totalImages / 12), [totalImages]);

  return (
    <CardContext.Provider value={{ onImgClick: handleImgClick, cardRef }}>
      <ToastContainer autoClose={1500} theme={'dark'} icon={true} />
      <Box>
        <Searchbar onSubmit={handleSubmit} />
        {status === 'idle' && <Title>Enter a name to search: </Title>}
        {status === 'pending' && <Loader />}
        {status === 'resolve' && <ImageGallery images={images} />}
        {status === 'rejected' && (
          <Title>Didn't find images with name: {name}</Title>
        )}
        {status === 'resolve' && page < countPages && (
          <Button onClick={loadMore} />
        )}
        {isModalOpen && largeImageUrl && (
          <Modal close={toggleModal}>
            <img src={largeImageUrl} alt={tag} />
          </Modal>
        )}
        {page > 1 && (
          <IconButton
            borderRadius={50}
            border="2px solid black"
            position="fixed"
            mode="bottom"
            onClick={scrollToTopBtn}
          >
            <FaArrowCircleUp size={32} color="#833c0dcd" />
          </IconButton>
        )}
      </Box>
    </CardContext.Provider>
  );
};

export default App;
