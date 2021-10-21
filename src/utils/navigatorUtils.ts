const ua = navigator.userAgent.toLowerCase();

export function isIE(): boolean {
  return ua.indexOf('msie ') > -1 || ua.indexOf('trident/') > -1;
}

export function isMacOS(): boolean {
  return ua.indexOf('mac os x') > -1;
}

export function isIOS() {
  const devices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  return devices.includes(navigator.platform) ||
        (ua.includes('mac') && 'ontouchend' in document);
}

export function isWindowsOS(): boolean {
  return ua.indexOf('windows') > -1;
}

export function isLinuxOS(): boolean {
  return ua.indexOf('linux') > -1;
}

export function isSafari(): boolean {
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
}

export function isFirefox(): boolean {
  return ua.indexOf('firefox') > -1;
}

export function isChrome(): boolean {
  return ua.indexOf('chrome') > -1;
}

export function isEdge(): boolean {
  return ua.indexOf('edge/') > -1;
}

export function isLocalhost(): boolean {
  return document.location.hostname === 'localhost';
}
