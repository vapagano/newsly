import { useEffect, useState } from 'react';

//Hooks
import useAxios from 'axios-hooks';

//Types
import { INews } from '../../types/news';

//Utils
import { getNewsHeaders } from '../../services/apiService';

// API
import { API_URL } from '../../@constants';

const useNews = (query:string, pageNumber:number, pageSize:number, dispatch: Boolean, local: boolean) => {

  const url: string = local ? `http://localhost:3001/data` : `${API_URL}?q=${query}&withThumbnails=true&pageNumber=${pageNumber}&pageSize=${pageSize}`;

  const [executeRequest, setExecuteRequest] = useState<Boolean>(false);
  const [{ data, loading, error }, execute] = useAxios<INews>(
    {
      url: url,
      method: 'GET',
      headers: getNewsHeaders(),
    },
    { manual: true }
  );

  useEffect(() => {
    if (query && pageNumber && executeRequest) {
      execute();
      setExecuteRequest(false);
    }
    if (dispatch) {
      setExecuteRequest(dispatch);
    }
  }, [dispatch, execute, executeRequest, query, pageNumber]);

  return {data, loading, error };
};

export default useNews;
