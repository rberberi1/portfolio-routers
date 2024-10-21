import React from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, project }) {
  if (!isOpen) 
    return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <img src={project.image.src} alt={project.title} width="100%" />
        <p>{project.description}</p>
        <a href={project.link}>{project.linkText}</a>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
