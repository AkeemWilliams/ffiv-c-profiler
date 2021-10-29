import { AllCharacterData } from "../Interfaces/char-progress";
import { Mounts } from "../Interfaces/mountsint";

export interface charPanelState {
    character: AllCharacterData | null;
    mounts:Mounts | null;
    isLoading:boolean;
    count:number;
    errorMsg:string;
}

export const initialState:charPanelState = {
    character : null,
    mounts:null,
    isLoading:false,
    count:0,
    errorMsg:""
};