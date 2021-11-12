import { Injectable } from "@angular/core";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as charaction from './character-panel.actions'
import { createEffect, Actions, ofType  } from "@ngrx/effects";

import { GetCharacterServiceService } from "../get-character-service.service";
import { forkJoin, of } from "rxjs";


@Injectable()

    export class CharacterPanelEffects{
        constructor(private actions$:Actions, private getCharacterService:GetCharacterServiceService){}

        someEffect$ = createEffect(() =>this.actions$.pipe(
            ofType(charaction.getChars),
            mergeMap((action) => {
                // let req1 = this.getCharacterService.getaAllCharacterInfo(action.id);
                let req1 = this.getCharacterService.getMockInfo();
                let req2 = this.getCharacterService.getMounts();
                let req3 = this.getCharacterService.getMinions();
                let req4 = this.getCharacterService.getAchieves();
                let statu = this.getCharacterService.getstatus();

                 return forkJoin([req1, req2, req3, req4, statu]).pipe(
                     map(([cRes,moRes, miRes, acRes, s]) => { 
                         //sort mounts
                         if(cRes.Mounts != null)
                         cRes.Mounts.sort((a, b) => (a.Name > b.Name ? 1 : -1));

                         moRes.results.sort((a, b) => (a.name > b.name ? 1 : -1));

                         if(cRes.Mounts != null)
                         moRes.results.forEach((o1: { name: string; isOwned: boolean; }) =>{
                           cRes.Mounts.filter(o2 => {
                             if(o1.name.toLowerCase() === o2.Name.toLowerCase()){
                               o1.isOwned= true;
                             }
                           })
                         })

                         cRes.mountDet = moRes;
                         
                         //sort minions
                         if(cRes.Minions != null)
                         cRes.Minions.sort((a, b) => (a.Name > b.Name ? 1 : -1));

                         miRes.results.sort((a, b) => (a.name > b.name ? 1 : -1));

                         if(cRes.Minions != null)
                         miRes.results.forEach((o1: { name: string; isOwned: boolean; }) =>{
                           cRes.Minions.filter(o2 => {
                             if(o1.name.toLowerCase() === o2.Name.toLowerCase()){
                               o1.isOwned= true;
                             }
                           })
                         })

                         cRes.minionDet = miRes;

                         cRes.achievementDet = acRes;
                         //get owned mounts, minions, achieves
                         cRes.mountCount = (cRes.Mounts ? cRes.Mounts.length : 0);
                         cRes.minionCount = (cRes.Minions ? cRes.Minions.length : 0);
                         cRes.achieveCount = (cRes.Achievements.List ? cRes.Achievements.List.length : 0);

                         //calc % collected
                         cRes.mountCompletion = Math.round(cRes.mountCount/moRes.count * 100);
                         cRes.minionCompletion = Math.round(cRes.minionCount/miRes.count * 100);
                         cRes.achievementCompletion = Math.round(cRes.achieveCount/acRes.count * 100);

                         return charaction.getCharSuccess({character : cRes})
                }), catchError(e => of(charaction.getCharError({errorMsg : "The character could not be found on Lodestone. Please try a new search."}))
                )
                )
            })
        ))




}