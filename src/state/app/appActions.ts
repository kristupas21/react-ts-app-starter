import { action } from 'typesafe-actions';
import { SET_APP_LOADING } from './appConstants';

export const setAppLoading = (
    isLoading: boolean
) => action(SET_APP_LOADING, isLoading);
