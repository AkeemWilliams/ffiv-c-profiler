import { createFeatureSelector, createSelector } from "@ngrx/store";
import { charPanelState } from "./character-panel.state";


//correlates to property on the store obj in app module
export const CHAR_PROFILE_STATE_NAME = "cprofile";
export const IS_LOADING_CHARACTER = "cprofile";

const getCProfileFeature = createFeatureSelector<charPanelState>(CHAR_PROFILE_STATE_NAME);
const isLoadingFeature = createFeatureSelector<charPanelState>(IS_LOADING_CHARACTER);

export const giveCProfile = createSelector(getCProfileFeature, 
    (state: charPanelState) => state.character
 );

export const isLoadingSelector = createSelector(
    isLoadingFeature, 
    (state: charPanelState) => state.isLoading);