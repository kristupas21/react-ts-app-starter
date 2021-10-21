import { generateUuid } from 'utils/globalUtils';
import { isIOS, isSafari } from 'utils/navigatorUtils';

const TEMP_DOWNLOAD_LINK_ID = '__temp-download-link__';

export function createLinkAndOpen(url: string, download?: boolean): void {
  const link = document.createElement('a');

  link.id = TEMP_DOWNLOAD_LINK_ID;
  link.href = url;
  link.style.display = 'none';

  if (download) {
    link.setAttribute('download', `file-${generateUuid()}`);
  } else {
    link.target = '_blank';
  }

  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function createLinkFromBlobAndOpen(blob: Blob): void {
  const url = window.URL.createObjectURL(blob);

  createLinkAndOpen(url, isIOS() && isSafari());
  window.URL.revokeObjectURL(url);
}
