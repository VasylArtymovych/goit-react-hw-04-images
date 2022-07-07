import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImgClick, cardRef }) => {
  return (
    <List>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tag={tags}
          imageUrl={webformatURL}
          largeImageUrl={largeImageURL}
          onImgClick={onImgClick}
          cardRef={cardRef}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onImgClick: PropTypes.func.isRequired,
};
