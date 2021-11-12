import { createFeatureSelector, createSelector } from "@ngrx/store";
import { charPanelState } from "../character-panel/character-panel.state";


//correlates to property on the store obj in app module
export const CHAR_PROFILE_STATE_NAME = "cprofile";
export const IS_LOADING_CHARACTER = "cprofile";
export const CHARACTER_ERR  = "cprofile";


const getCProfileFeature = createFeatureSelector<charPanelState>(CHAR_PROFILE_STATE_NAME);
const isLoadingFeature = createFeatureSelector<charPanelState>(IS_LOADING_CHARACTER);
const charErrMsg = createFeatureSelector<charPanelState>(CHARACTER_ERR);


export const giveCProfile = createSelector(getCProfileFeature, 
    (state: charPanelState) => state.character
 );

export const isLoadingSelector = createSelector(
    isLoadingFeature, 
    (state: charPanelState) => state.isLoading);

export const characterErrorSelector = createSelector(
    charErrMsg,
    (state: charPanelState) => state.errorMsg
);