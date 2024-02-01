type TypeLocalStorage = {
  key: 'userData';
  value: string;
}



const localStorageUtils = {
  setItem: ({ key, value }: TypeLocalStorage) => localStorage.setItem(key, JSON.stringify(value)),
  getItem: (key: string) => JSON.parse(localStorage.getItem(key) || '{}'),
}

const cookieUtils = {
  setItem: ({ key, value }: TypeLocalStorage) => document.cookie = `${key}=${value};`,
  getItem: (key: string) => {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
}

export {
  localStorageUtils,
  cookieUtils,
}