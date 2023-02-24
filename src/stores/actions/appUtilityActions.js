import { SET_CURRENT_PAGE } from '../actionTypes/appUtilityActionType';

export const setCurrentPage = (payload) => ({
    type: SET_CURRENT_PAGE,
    payload: payload
})