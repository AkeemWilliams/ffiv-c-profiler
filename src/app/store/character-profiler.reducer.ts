import { createReducer, on } from "@ngrx/store";
import { getCharError, getChars, getCharSuccess } from './character-profiler.actions'
import { AllCharacterData, Character, Achievements } from '../Interfaces/char-progress'
import { initialState } from './character-panel.state';

export const characterPanelReducer = createReducer(
    initialState,
    on(getChars, (state, action) =>{
        return {...state, isLoading: true, errorMsg:""}
    }),
    on(getCharSuccess, (state, action) => {
        return {...state, character: {...state.character, ...action.character}, isLoading :false}
    } ),
    on(getCharError, (state) => {
        return {...state, isLoading :false, errorMsg:"The character could not be found on Lodestone. Please try a new search."}
    })
)
