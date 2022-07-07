import styled from 'styled-components';
import { Form, Field} from 'formik';

export const Header = styled('div')`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding: 12px 24px;
    margin-bottom: 5px;
    color: #fff;
    background-image: linear-gradient(to right, #000000, #833c0dcd, #000000);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledForm = styled(Form)`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: ${p => p.theme.colors.background};
    border-radius: 3px;
    overflow: hidden;
`;

export const Input = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    background: ${p => p.theme.colors.background};

    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`;

export const Button = styled('button')`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background: ${p => p.theme.colors.background};
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
        background: ${p => p.theme.colors.effects};
    }
`;

export const ErrorText = styled('span')`
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: #4c3005;
`;