import React from 'react'
import { CSSTransition } from 'react-transition-group'

export interface ISpinnerProps {
   loading: boolean
}

const Spinner: React.FC<ISpinnerProps> = ({loading}) => {
    const nodeRef = React.useRef(null)
    return (
        <CSSTransition
        in={loading}
        timeout={300}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="d-flex align-items-center justify-content-center position-fixed top-0 left-0 right-0 bottom-0 bg-white-60 z-index-10">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        </CSSTransition>
    )
}

export default Spinner
