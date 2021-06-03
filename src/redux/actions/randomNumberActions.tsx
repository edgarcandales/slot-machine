import { Dispatch } from 'redux';
import { RANDOM_NUMBER } from '../types/types';


export type ActionType = { numRamdom: {} };

export interface ActionTypeNumber {
    type: typeof RANDOM_NUMBER;
    payload: {};
}



export const randomNumberAction =
    (data: object) => async (dispatch: Dispatch<ActionTypeNumber>) => {
        try {
            dispatch({
                type: RANDOM_NUMBER,
                payload: data,
            });
        } catch (error) {
        }
    };

