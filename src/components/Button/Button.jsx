import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
