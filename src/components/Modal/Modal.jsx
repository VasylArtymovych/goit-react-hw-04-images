import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { IconButton } from 'components/IconButton';
import { Backdrop, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ close, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code !== 'Escape') return;
      close();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>
        <IconButton onClick={close} position="absolute">
          <AiOutlineCloseCircle color="white" size={28} />
        </IconButton>

        {children}
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
};
