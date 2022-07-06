import React from 'react';

function Modal({ onClose, currentRecipe}) {
    const{title, image, category, link, index} = currentRecipe;
 
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>
                <img src={require(`${image}`)} alt="current category" />
                <p>{title}</p>
                <p>{link}</p>
                <p>{category}</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;