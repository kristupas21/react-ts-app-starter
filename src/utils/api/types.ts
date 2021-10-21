import { AxiosResponse } from 'axios';

export type ApiPromise<T = void> = Promise<AxiosResponse<T>>;
