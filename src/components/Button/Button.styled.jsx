import styled from 'styled-components';

export const StyledButton = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  display: ${p => p.display || 'flex'};
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  width: ${p => p.width};
  height: ${p => p.height || 'auto'};
  padding: ${p => p.padding || p.theme.space[3]}px;
  padding-left: 20px;
  padding-right: 20px;
  margin: ${p => p.margin || '10px auto'};
  font-size: ${p => p.fontSize || p.theme.fontSizes.s}px;
  border: ${p => p.border || 'none'};
  outline: ${p => p.outline || 'none'};
  cursor: pointer;
  border-radius: ${p => p.borderRadius || p.theme.radii.normal};
  background: ${p =>
    p.backgroundColor ||
    'linear-gradient(to right, #000000, #833c0dcd, #000000)'};
  color: ${p => p.color || p.theme.colors.effects};

  &:hover,
  &:focus {
    background: ${p =>
      p.hoverBackground ||
      'linear-gradient(to right, #833c0dcd, #000000, #833c0dcd)'};
    box-shadow: 0px 2px 4px 4px;
  }
`;
