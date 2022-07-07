import styled from "styled-components";

export const IconButton = styled.button.attrs(p => ({
    type: p.type || 'button',
    
}))`
    display: ${p => p.display || 'flex'};
    align-items: ${p => p.alignItems || 'center'};
    justify-content: ${p => p.justifyContent || 'center'};

    position: ${p => p.position};
    top: 10px;
    right: 10px;
    background-color: ${p => p.backgroundColor || 'transparent' };
    color: ${p => p.color || p.theme.colors.text };
    border: none;
    outline: none;
    cursor: pointer;
`;

