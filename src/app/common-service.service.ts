import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  characterData: any;

  constructor() { }

  savedCharacterData(char:any){
  return this.characterData = char;
  }
}
