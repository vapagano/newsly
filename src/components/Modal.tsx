import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import useOnClickOutside from '../hooks/useOnClickOutside';

const portalContainer = document.body;

export interface IModalProps {
  isShowing: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText: string
}

const ModalBackdrop: React.FC = () => {
    return <div className="modal-backdrop show"></div>
};

const Modal: React.FC<IModalProps> = ({
  isShowing,
  hide,
  modalContent,
  headerText,
}) => {

  const modalRef = useRef<HTMLDivElement | null>(null)
  const transitionRef = useRef<HTMLDivElement | null>(null)
    
  useEffect(() => {
    if (isShowing) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isShowing]);

  const handleClickOutside = () => {
    hide()
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return portalContainer
    ? ReactDOM.createPortal(
        <>
            <CSSTransition
              in={isShowing}
              timeout={300}
              classNames="modal"
              unmountOnExit
              nodeRef={transitionRef}
            >
          <div
            className="modal show d-block"
            tabIndex={-1}
            role="dialog"
            aria-labelledby={headerText}
            aria-hidden="true"
            ref={transitionRef}
          >
            <div className="modal-dialog modal-dialog-centered" role="document" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{headerText}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{modalContent}</div>
              </div>
            </div>
          </div>
          </CSSTransition>
          {isShowing && <ModalBackdrop/>}
        </>,
        portalContainer
      )
    : null;
};

export default Modal;
