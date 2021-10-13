import {Component,OnInit, Input} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import { CommonServiceService } from '../common-service.service';
import { Observable, of, Subject, ReplaySubject, BehaviorSubject,forkJoin } from 'rxjs';
import {pairwise, startWith} from 'rxjs/operators'

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {
  userData: any;

  //completions
  achievementCompletion?: number;
  mountCompletion?: number;
  minionCompletion?: number;

  constructor(
    private LocalStorageService: LocalStorageService, 
    private getChar:GetCharacterServiceService, private commonData:CommonServiceService) {}



    //search
    characterUrl?:string | number;
    characterID?:number;
  // RxJS v6+
   suber = new BehaviorSubject(0);
  
  

  ngOnInit(): void {
console.log(this);
this.userData = this.commonData.characterData;
    // if (!this.LocalStorageService.getItem('ff14data')) {

    //   fetch("https://ffxivcollect.com/api/characters/37684988", {
    //       mode: 'cors'
    //     })
    //     .then(response => response.json())
    //     .then(data => {

    //       this.userData = data;
    //       this.mountCompletion = Math.round(this.userData.mounts.count/this.userData.mounts.total * 100);
    //       this.achievementCompletion = Math.round(this.userData.achievements.count/this.userData.achievements.total * 100);
    //       this.minionCompletion = Math.round(this.userData.minions.count/this.userData.minions.total * 100);

    //       console.log(this, this.mountCompletion)
    //       //get maindata
    //       fetch("https://xivapi.com/character/37684988?data=AC,MIMO", {
    //           mode: 'cors'
    //         })
    //         .then(response => response.json())
    //         .then(data => {

    //           this.userData.details = data;
    //           this.LocalStorageService.setItem('ff14data', JSON.stringify(this.userData));

    //           console.log(this)

    //         })
    //     })


    // } else {
    //   this.userData = this.LocalStorageService.getItem('ff14data');
    //   this.userData = JSON.parse(this.userData);

    //   console.log(this)
    // }
  }
  searchCharacter():void{
  
    let charcode = (<string>this.characterUrl).match(/\d+/);
    let char = parseInt(charcode ? charcode[0] : 'undefed')
    this.characterID = char;

    console.log([`the character url is: ${this.characterUrl}`, this, charcode, charcode ? charcode[0] : 'undefed', this.characterID]);

      this.characterUrl = "";
    forkJoin([this.getChar.getCharacter(this.characterID),this.getChar.getaAllCharacterInfo(this.characterID)]).subscribe(([s,p])=>{
      console.log('forkjoin worked', s, p);
    })
    
      this.getChar.getCharacter(this.characterID).subscribe(s=>{
      console.log(s);
      this.userData = s;
      this.commonData.savedCharacterData(s);

      this.userData.mountCompletion = Math.round(this.userData.mounts.count/this.userData.mounts.total * 100);
      this.userData.achievementCompletion = Math.round(this.userData.achievements.count/this.userData.achievements.total * 100);
      this.userData.minionCompletion = Math.round(this.userData.minions.count/this.userData.minions.total * 100);
      console.log(this);

      setTimeout(() => {
        // let ele = document.querySelector("body");
        // console.log(ele);
        // ele?.scrollIntoView({behavior:"smooth", block:"end"})
        window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'})
      });

    });
  }
  

}
