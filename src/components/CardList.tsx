import React from 'react';
import { INew, INews } from '../types/news';
import Card from './Card';

export interface ICardListProps {
  data?: INews;
  loading: boolean;
}

const CardList: React.FC<ICardListProps> = ({ data, loading }) => (
  <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {data &&
        data.value.map((item: INew, index:number) => {
          return (
              <div
                className="col mb-5 d-flex align-items-stretch"
                key={index}
              >
                <Card
                  title={item.title}
                  body={item.description}
                  imageSrc={item.image.thumbnail}
                  imageAlt={item.image.title}
                  link={item.url}
                  loading={loading}
                />
              </div>
          );
        })}
    </div>
  </>
);

export default CardList;
