import React from 'react';
import ImageFadeIn from "react-image-fade-in";

import useModal from '../hooks/useModal';

// Services
import { truncate } from '../services/stringService';

// Components
import Modal from './Modal';

export interface ICardProps {
  title: string;
  body: string;
  link: string;
  imageSrc: string;
  imageAlt?: string;
  loading: boolean;
}

const Card: React.FC<ICardProps> = ({
  title,
  body,
  link,
  imageSrc,
  imageAlt,
  loading,
}) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className="card w-100 box-shadow img-hover">
        {imageSrc && (
          <div
            onClick={toggle}
            className="overflow-hidden relative h-200 bg-gradient-placeholder"
          >
            {
            
           !loading && <ImageFadeIn width={640} height={480} src={imageSrc} className="card-img-top object-cover w-100 h-100"
           alt={imageAlt}/>

            }
          </div>
        )}
        <div className="card-body d-flex flex-column flex-fill justify-content-between">
          <div className="mb-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{truncate(body, 20)}</p>
          </div>
          <a
            href={link}
            className="align-self-end"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
      {
        <Modal
          isShowing={isShowing}
          hide={toggle}
          headerText={title}
          modalContent={
            <div className="min-h-200 bg-gradient-placeholder">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="img-fluid rounded w-100"
              />
            </div>
          }
        />
      }
    </>
  );
};

export default Card;
