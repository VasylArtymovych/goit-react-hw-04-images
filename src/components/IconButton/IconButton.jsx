import styled, { css } from 'styled-components';

export const IconButton = styled.button.attrs(p => ({
  type: p.type || 'button',
}))`
  display: ${p => p.display || 'flex'};
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};

  position: ${p => p.position};
  ${p => {
    switch (p.mode) {
      case 'top':
        return css`
          top: ${p => p.top || p.theme.space[3]}px;
          right: ${p => p.right || p.theme.space[3]}px;
        `;
      case 'bottom':
        return css`
          bottom: ${p => p.top || p.theme.space[3]}px;
          right: ${p => p.right || p.theme.space[3]}px;
        `;
      default:
        return css`
          top: 10px;
          right: 10px;
        `;
    }
  }};

  background-color: ${p => p.backgroundColor || 'transparent'};
  color: ${p => p.color || p.theme.colors.text};
  border: ${p => p.border || 'none'};
  border-radius: ${p => p.borderRadius || 0}%;
  outline: none;
  cursor: pointer;
`;
