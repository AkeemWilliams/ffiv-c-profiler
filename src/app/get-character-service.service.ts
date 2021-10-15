import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharProgress, AllCharacterData } from './Interfaces/char-progress';

import { Mounts } from './Interfaces/mountsint';
import { Minions } from './Interfaces/minions-int'



interface mounts{
count: number;
query:{};
results:[];
};
interface minions{
  count: number;
  query:{};
  results:[];
};
@Injectable({
  providedIn: 'root'
})
export class GetCharacterServiceService {
  chars = of([])
  constructor(private http:HttpClient) { }
  private uerl = 'https://ffxivcollect.com/api/characters/37684988';

  

  options = {observe: 'body', responseType: 'json'}

  getCharacter(url:number):Observable<CharProgress[]>{
    return this.http.get<CharProgress[]>(`https://ffxivcollect.com/api/characters/${url}`)

  }
  getaAllCharacterInfo(url:number):Observable<AllCharacterData>{
    return this.http.get<AllCharacterData>(`https://xivapi.com/character/${url}?data=AC,MIMO`)

  }
  getMounts():Observable<Mounts>{
    return this.http.get<Mounts>(`https://ffxivcollect.com/api/mounts`)
  }
  getMinions():Observable<Minions>{
    return this.http.get<Minions>(`https://ffxivcollect.com/api/minions`)
  }
}
