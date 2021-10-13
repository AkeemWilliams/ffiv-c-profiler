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

@Injectable({
  providedIn: 'root'
})
export class GetCharacterServiceService {
  chars = of([])
  constructor(private http:HttpClient) { }
  private uerl = 'https://ffxivcollect.com/api/characters/37684988';

  

  options = {observe: 'body', responseType: 'json'}

  getCharacter(url:number):Observable<CharProgress[]>{
    console.log('yo char');
    return this.http.get<CharProgress[]>(`https://ffxivcollect.com/api/characters/${url}`)

  }
  getaAllCharacterInfo(url:number){
    console.log('yo char');
    return this.http.get<CharProgress[]>(`https://xivapi.com/character/${url}?data=AC,MIMO`)

  }
  getMounts():Observable<mounts[]>{
    console.log('yo mounts');
    return this.http.get<mounts[]>(`https://ffxivcollect.com/api/mounts`)
  }
  getMinions():Observable<minions[]>{
    console.log('yo minions');
    return this.http.get<minions[]>(`https://ffxivcollect.com/api/minions`)
  }
}
