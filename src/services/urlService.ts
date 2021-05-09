export const DEFAULT_PAGE:number = 1;
export const PAGE_SIZE:number = 9;
export const PAGES_TO_SHOW:number = 5;
export const QUERY_MIN_CHARS:number = 2;

const supportedParams:Array<string> = ['q', 'page', 'limit'];

export interface DataQueryParams {
    q: string
    page: number
}
  
const getQueryParams = (urlParams: URLSearchParams): DataQueryParams => {
  const obj: any = Array.from(urlParams)
    .filter((param) => supportedParams.includes(param[0]))
    .map((param) => {
      return {
        [param[0]]: param[1],
      };
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

  const keys = Object.keys(obj);

  if (!keys.includes('page')) {
    obj.page = DEFAULT_PAGE;
  }

  return obj as DataQueryParams;
};

export default getQueryParams;