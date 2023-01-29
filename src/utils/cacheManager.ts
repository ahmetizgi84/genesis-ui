import type { Moment } from 'moment';
import moment from 'moment';
const DEFAULT_CACHE_STORAGE = 'local';

interface ICachedObject {
  data: any;
  expires: boolean | string | Moment;
}

let cachedObjects: Record<string, ICachedObject> = {};

function cacheGet(key: string, storageName = DEFAULT_CACHE_STORAGE): any {
  try {
    let cachedObject: ICachedObject | null = null;

    if (Object.prototype.hasOwnProperty.call(cachedObjects, key)) cachedObject = cachedObjects[key];

    if (cachedObject == null) {
      const dataStr = getStorage(storageName).getItem(key);
      if (dataStr != null)
        try {
          cachedObject = JSON.parse(dataStr);
        } catch (e) {
          console.error(e);
        }
    }

    if (cachedObject && cachedObject.expires != null) {
      if (cachedObject.expires == false || moment.utc(cachedObject.expires as string) > moment.utc()) {
        cachedObjects[key] = cachedObject;
        return cachedObject.data;
      } else {
        // console.log('Specified key is expired !', key, storageName, cachedObject.expires);
        cacheDelete(key, storageName);
      }
    }
    // else console.log('Specified key does not exists in cache !', key, storageName);
  } catch (error) {
    console.error(error);
  }
  return null;
}

function cacheSet(key: string, object: any, expirationMin: number | null = null, storageName = DEFAULT_CACHE_STORAGE) {
  try {
    if (key && object) {
      const temp = {
        data: object,
        expires: expirationMin ? moment.utc().add(expirationMin, 'm') : false
      };

      cachedObjects[key] = temp;

      getStorage(storageName).setItem(key, JSON.stringify(temp));
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
}

function getStorage(storageName: string): Storage {
  switch (storageName) {
    case 'local':
      return localStorage;
    case 'session':
    default:
      return sessionStorage;
  }
}

function cacheDelete(key: string, storageName = DEFAULT_CACHE_STORAGE) {
  try {
    delete cachedObjects[key];

    getStorage(storageName).removeItem(key);

    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
}

export { cacheGet, cacheSet, cacheDelete };
