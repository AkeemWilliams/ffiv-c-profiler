import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharProgress, AllCharacterData } from './Interfaces/char-progress';
import { CheezyMints } from './Interfaces/achievements';
import { Mounts } from './Interfaces/mountsint';
import { Minions } from './Interfaces/minions-int';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterServiceService {
  chars = of([])
  constructor(private http:HttpClient) { }
  private uerl = 'https://ffxivcollect.com/api/characters/37684988';

  

  options = {observe: 'body', responseType: 'json'}

   getAchieves():Observable<AllCharacterData["achievementDet"]>{
     return this.http.get<AllCharacterData["achievementDet"]>(`https://ffxivcollect.com/api/achievements/`)
   }
  getaAllCharacterInfo(url:number):Observable<AllCharacterData>{
    return this.http.get<AllCharacterData>(`https://xivapi.com/character/${url}?data=MIMO&extended=1`)

  }
  getMockInfo():Observable<AllCharacterData>{
    return this.http.get<AllCharacterData>('http://localhost:3000/sample')

  }
  getstatus(){
    return this.http.get('http://localhost:3000/status')
  }
  getMounts():Observable<AllCharacterData["mountDet"]>{
    return this.http.get<AllCharacterData["mountDet"]>(`https://ffxivcollect.com/api/mounts`).pipe(
      map((data) =>{
        return data;
      })
    )
  }
  getMinions():Observable<AllCharacterData["mountDet"]>{
    return this.http.get<AllCharacterData["mountDet"]>(`https://ffxivcollect.com/api/minions`)
  }
}




