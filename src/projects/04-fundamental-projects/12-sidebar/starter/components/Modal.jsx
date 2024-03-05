import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useContextSidebar } from '../hooks/useContextSidebar';

const Modal = () => {
    const {modalIsOpen, closeModal} = useContextSidebar();

    return (
        <div className={modalIsOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
            <div className="modal-container">
                <IoMdClose className='close-btn' onClick={closeModal} />
                modal
            </div>
        </div>
    );
};

export default Modal;