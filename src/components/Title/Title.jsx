import styled from "styled-components";

export const Title = styled('h2')`
    width: ${p => p.width || 320}px;
    font-size: ${p => p.fontSize || 28}px;
    font-weight: ${p => p.fontWeight || 700};
    color: ${p => p.color || p.theme.colors.text};
    text-shadow: 0px -2px 3px #aa7651cd;
    margin: ${p => p.margin || '50px auto'};
`;