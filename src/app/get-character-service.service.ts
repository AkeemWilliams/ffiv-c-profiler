import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharProgress } from './char-progress';

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
interface allCharData{
  Achievements: {};
  AchievementsPublic:boolean;
  Character:{};
  FreeCompany: null;
  FreeCompanyMembers: null;
  Friends: null;
  FriendsPublic: null;
  Minions:Array<any>;
  Mounts:Array<any>;
  PvPTeam:null;
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
  getaAllCharacterInfo(url:number):Observable<allCharData>{
    return this.http.get<allCharData>(`https://xivapi.com/character/${url}?data=AC,MIMO`)

  }
  getMounts():Observable<mounts>{
    return this.http.get<mounts>(`https://ffxivcollect.com/api/mounts`)
  }
  getMinions():Observable<minions>{
    return this.http.get<minions>(`https://ffxivcollect.com/api/minions`)
  }
}
