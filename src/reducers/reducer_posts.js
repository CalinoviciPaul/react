/**
 * Created by IrianLaptop on 3/16/2017.
 */
import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE={all:[], post: null};

export default function (state= INITIAL_STATE, action){
    switch (action.type){
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default: return state;
    }
}