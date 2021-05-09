import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

//Components
import CardList from '../../../components/CardList';
import SearchForm from '../../../components/SearchForm';
import Header from '../../../components/Header';
import Spinner from '../../../components/Spinner';
import Pagination from '../../../components/Pagination';

//Assets
import { ReactComponent as ConnectionErrorSvg } from '../../../assets/icons/connectionError.svg';
import { ReactComponent as NoResultsSvg } from '../../../assets/icons/noResults.svg';

//Hooks
import useNews from '../../../hooks/news/useNews';

//Services
import getQueryParams, {
  DEFAULT_PAGE,
  PAGE_SIZE,
  PAGES_TO_SHOW,
  QUERY_MIN_CHARS,
} from '../../../services/urlService';
import EmptyState from '../../../components/EmptyState';

const Home: React.FC = () => {
  const local: boolean = true;

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [dispatch, setDispatch] = useState<boolean>(false);

  const { data, error, loading } = useNews(
    query,
    page,
    PAGE_SIZE,
    dispatch,
    local
  );

  const history = useHistory();
  const location = useLocation();

  const urlParams = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);

  const queryParams = useMemo(() => {
    return getQueryParams(urlParams);
  }, [urlParams]);

  useEffect(() => {
    const { q, page } = queryParams;
    setQuery(q && q.length >= QUERY_MIN_CHARS ? q : 'Latest');
    setPage(page ? page : DEFAULT_PAGE);
  }, [queryParams]);

  useEffect(() => {
    if (query) {
      setDispatch(true);
    }
  }, [query, page]);

  useEffect(() => {
    if (loading) {
      setDispatch(false);
    }
  }, [loading]);

  const handleSearch = (inputValue: string) => {
    urlParams.set('q', inputValue);
    urlParams.delete('page');
    history.push({
      search: `?${urlParams}`,
    });
  };

  return (
    <>
      <Spinner loading={loading} />

      <div className="bg-purple p-5 h-400 d-flex align-items-center mb-5">
        <div className="container">
          <div className="row w-100">
            <div className="col-10 offset-1 col-md-8 offset-md-2">
              <Header />
              <SearchForm parentCallback={handleSearch} initialValue={query} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        {error ? (
          <EmptyState
            icon={<ConnectionErrorSvg />}
            title={'Oops!'}
            text={' Something went wrong, please try again.'}
          />
        ) : (
          data &&
          (data.totalCount === 0 ? (
            <EmptyState
              icon={<NoResultsSvg />}
              title={'No Results'}
              text={'Please try with other search.'}
            />
          ) : (
            <>
              <CardList data={data} loading={loading} />
              <Pagination
                totalCount={+data.totalCount}
                currentPage={+queryParams.page}
                pagesToShow={+PAGES_TO_SHOW}
                query={query}
              />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
