import { environment } from '../environments/environment';

export function getEndpointURL(endpoint: string): string {
  return environment.apiHost + endpoint;
}

export function truncate(
  value: string,
  limit = 35,
  completeWords = true,
  ellipsis = '…'
) {
  if (!value || value.length < limit) {
    return value;
  }
  if (completeWords) {
    const limitEmptySpace = value.substr(0, limit).lastIndexOf(' ');
    const limitUnderscore = value.substr(0, limit).lastIndexOf('_');
    const limitHyphen = value.substr(0, limit).lastIndexOf('-');

    limit = Math.max(10, limitEmptySpace, limitUnderscore, limitHyphen);
  }
  return `${value.substr(0, limit)}${ellipsis}`;
}

