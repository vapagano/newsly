import React from 'react';

export interface IEmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  text?: string;
}

const EmptyState: React.FC<IEmptyStateProps> = ({ icon, title, text }) => {
  return (
    <>
      <div className="row w-100">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <div className="jumbotron bg-white border text-center">
            {icon && <div className="mb-3">{icon}</div>}
            {title && <p className="h1">{title}</p>}
            {text && <p className="lead text-muted">{text}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyState;
