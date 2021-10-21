import qs, { ParsedQs } from 'qs';
import { LocationDescriptorObject, History, Location } from 'history';
import { removeNilValues } from 'utils/globalUtils';

export function parseQuery(search: string): ParsedQs {
  if (!search) {
    return {};
  }

  const options: { [key: string]: Primitive } = {
    ...(search.startsWith('?') && { ignoreQueryPrefix: true }),
  };

  return qs.parse(search, options);
}

function getLocationDescriptor(
  location: Location<any>,
  params = {}
): LocationDescriptorObject {
  const search = {
    ...parseQuery(location.search),
    ...params,
  };

  return {
    pathname: location.pathname,
    search: qs.stringify(removeNilValues(search)),
  };
}

export function pushQuery(history: History, params = {}): void {
  history.push(getLocationDescriptor(history.location, params));
}

export function replaceQuery(history: History, params = {}): void {
  history.replace(getLocationDescriptor(history.location, params));
}
