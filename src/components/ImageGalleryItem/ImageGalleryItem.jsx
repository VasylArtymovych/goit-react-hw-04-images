import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  tag,
  imageUrl,
  largeImageUrl,
  onImgClick,
  cardRef,
}) => {
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
