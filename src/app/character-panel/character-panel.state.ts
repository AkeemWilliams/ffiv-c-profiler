import { AllCharacterData } from "../Interfaces/char-progress";
import { Mounts } from "../Interfaces/mountsint";

export interface charPanelState {
    character: AllCharacterData | null;
    isLoading:boolean;
    errorMsg:string;
}

export const initialState:charPanelState = {
    character : null,
    isLoading:false,
    errorMsg:""
};