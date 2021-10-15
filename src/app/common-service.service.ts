import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';


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
