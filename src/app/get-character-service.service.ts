import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharProgress, AllCharacterData } from './Interfaces/char-progress';
import { CheezyMints } from './Interfaces/achievements';
import { Mounts } from './Interfaces/mountsint';
import { Minions } from './Interfaces/minions-int'

@Injectable({
  providedIn: 'root'
})
export class GetCharacterServiceService {
  chars = of([])
  constructor(private http:HttpClient) { }
  private uerl = 'https://ffxivcollect.com/api/characters/37684988';

  

  options = {observe: 'body', responseType: 'json'}

   getAchieves():Observable<CheezyMints>{
     return this.http.get<CheezyMints>(`https://ffxivcollect.com/api/achievements/`)

   }
  getaAllCharacterInfo(url:number):Observable<AllCharacterData>{
    return this.http.get<AllCharacterData>(`https://xivapi.com/character/${url}?data=AC,MIMO&extended=1`)

  }
  getMounts():Observable<Mounts>{
    return this.http.get<Mounts>(`https://ffxivcollect.com/api/mounts`)
  }
  getMinions():Observable<Minions>{
    return this.http.get<Minions>(`https://ffxivcollect.com/api/minions`)
  }
}
