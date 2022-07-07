import styled from "styled-components";

export const Backdrop = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.muted};
`;


export const StyledModal = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: calc(100vh - 60px);
    max-width: 300px;
    width: 100%;
    padding: ${p => p.padding || 0}px;

    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px -0px rgba(0,0,0,0.2);

    transform: translate(-50%, -50%);
    transition: transform 2000ms;

    @media ${p => p.theme.tablet} {
        max-width: 650px;
    }
    @media ${p => p.theme.desktop} {
        max-width: 950px;
    }
`;




// const scaleModal = keyframes`
//     from {
//         transform: scale(0.5);
//     }
//     to {
//         transform: scale(1);
//     }

// `;

