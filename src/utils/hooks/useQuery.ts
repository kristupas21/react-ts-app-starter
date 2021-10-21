import { useHistory } from 'react-router';
import { ParsedQs } from 'qs';
import { parseQuery, pushQuery, replaceQuery } from 'utils/qs';

type HookReturnValue = {
  pushQuery: (params?: object) => void;
  replaceQuery: (params?: object) => void;
  parseQuery: () => ParsedQs;
  search: string;
};

export default (): HookReturnValue => {
  const history = useHistory();
  const { search } = history.location;

  return {
    pushQuery: (params = {}) => pushQuery(history, params),
    replaceQuery: (params = {}) => replaceQuery(history, params),
    parseQuery: () => parseQuery(search),
    search,
  };
};
