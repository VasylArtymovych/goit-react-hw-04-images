import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';
import { CardContext } from 'components/Context';

export const ImageGalleryItem = ({ tag, imageUrl, largeImageUrl }) => {
  const { cardRef, onImgClick } = useContext(CardContext);

  return (
    <Item ref={cardRef}>
      <Img
        onClick={() => {
          onImgClick(largeImageUrl, tag);
        }}
        src={imageUrl}
        alt={tag}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
