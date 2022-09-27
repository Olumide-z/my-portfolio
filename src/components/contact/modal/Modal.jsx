import React, { useEffect } from 'react';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import './modal.css';

const Modal = ({ modalContent, closeResult}) => {

    useEffect(() => {
        setTimeout(() => {
            closeResult();
        }, 3000);
    }, [])

  return (
    <div className='modal'>
      <div className="modal__content">
        <p><BsFillPatchCheckFill className='modal__content-icon'/></p>
        <p>{modalContent}</p>
      </div>
    </div>
  )
}

export default Modal