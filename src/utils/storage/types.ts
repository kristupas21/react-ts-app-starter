export enum StorageKey {
  Default = 'default'
}

export interface StorageClass {
  getState(): Record<StorageKey, any> | null;

  remove(key: StorageKey, prop?: string): void;

  clearState(): void;

  set(key: StorageKey.Default, value: any): void;

  setNested(key: StorageKey.Default, nestedKey: string, value: any): void;

  get(key: StorageKey.Default): any;
}
