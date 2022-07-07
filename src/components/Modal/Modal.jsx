import { createPortal } from "react-dom";
import React, {Component} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import { IconButton } from "components/IconButton";
import {Backdrop, StyledModal} from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {
    static propTypes ={
        close: PropTypes.func.isRequired,
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.close();
        }
    }

    handleBackdropClick = e => {
        if(e.currentTarget === e.target){
            this.props.close();
        }
    }

    render(){
        return createPortal(
            <Backdrop onClick={this.handleBackdropClick}>
                <StyledModal>
                    <IconButton onClick={this.props.close} position='absolute'>
                        <AiOutlineCloseCircle color='white'size={28}/>
                    </IconButton>
                    {this.props.children}
                </StyledModal>
            </Backdrop>,
            modalRoot,
        )
    }
};



