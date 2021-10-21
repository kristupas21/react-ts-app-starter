import omit from 'lodash/omit';
import { StorageClass, StorageKey } from './types';

export class Storage implements StorageClass {
  private readonly appKey = 'PROFIT_WEB';

  private storage = localStorage;

  private removeNested = (key: StorageKey, prop: string): void => {
    const obj = this.get(key);

    if (!obj) {
      return;
    }

    const newState = {
      ...this.getState(),
      [key]: omit(obj, prop),
    };

    this.storage.setItem(this.appKey, JSON.stringify(newState));
  }

  public getState = () => {
    try {
      return JSON.parse(this.storage.getItem(this.appKey)) || null;
    } catch {
      return null;
    }
  }

  public set = (key, value) => {
    const currentState = this.getState();
    const item = { [key]: value };

    this.storage.setItem(this.appKey, JSON.stringify({
      ...currentState,
      ...item,
    }));

    return this.get(key);
  }

  public setNested = (key, prop, value): void => {
    const obj = this.get(key);

    this.set(key, {
      ...obj,
      [prop]: value,
    });
  }

  public remove = (key, prop) => {
    if (prop) {
      this.removeNested(key, prop);
      return;
    }

    if (this.get(key) == null) {
      return;
    }

    const newState = omit(this.getState(), key);

    this.storage.setItem(this.appKey, JSON.stringify(newState));
  }

  public get = (key) => {
    const value = this.getState()?.[key];

    if (value === undefined) {
      return null;
    }

    return value;
  }

  public clearState = (): void =>
    this.storage.removeItem(this.appKey);
}

const storage = new Storage() as StorageClass;

export default storage;
