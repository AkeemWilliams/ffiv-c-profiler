import { createAction, props } from '@ngrx/store';
import { AllCharacterData } from '../Interfaces/char-progress'

export const MOUNT_FILTER = '[Character Panel/API] Get Character';
export const GET_CHARACTER_SUCCESS  = '[Character Panel/API] Get Character success';
export const GET_CHARACTER_ERROR  = '[Character Panel/API] Get Character Error';

export const getCharSuccess = createAction(GET_CHARACTER_SUCCESS, props<{character:AllCharacterData}>());
export const getCharError = createAction(GET_CHARACTER_ERROR, props<{errorMsg:string}>());



