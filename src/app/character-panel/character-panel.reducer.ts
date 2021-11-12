import { createReducer, on } from "@ngrx/store";
import { getCharError, getChars, getCharSuccess } from './character-panel.actions'
import { AllCharacterData, Character, Achievements } from '../Interfaces/char-progress'
import { initialState } from './character-panel.state';

export const characterPanelReducer = createReducer(
    initialState,
    on(getChars, (state, action) =>{
        console.log(state, action);

        return {...state, isLoading: true, errorMsg:""}
    }),
    on(getCharSuccess, (state, action) => {
        console.log(state, action);

        return {...state, character: {...state.character, ...action.character}, isLoading :false}
    } ),
    on(getCharError, (state, action) => {
        console.log(action);
        return {...state, isLoading :false, errorMsg: action.errorMsg}
    })
)
