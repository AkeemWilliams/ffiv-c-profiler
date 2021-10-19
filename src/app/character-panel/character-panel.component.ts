import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import { CommonServiceService } from '../common-service.service';
import { forkJoin } from 'rxjs';
import { AllCharacterData } from '../Interfaces/char-progress'


@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})

export class CharacterPanelComponent implements OnInit {
  userData:any;

  //completions
  achievementCompletion?: number;
  mountCompletion?: number;
  minionCompletion?: number;
  showSpinner: boolean = false;

  @Output() characterObj = new EventEmitter();
  errorShow: boolean = false;
  
  constructor(
    private LocalStorageService: LocalStorageService, 
    private getChar:GetCharacterServiceService, private commonData:CommonServiceService) {}

    //search
    characterUrl?:string | number;
    characterID?:number;

  ngOnInit(): void {
    if(this.userData){
      setTimeout(() => {
        window.scrollTo({top:document.body.scrollHeight + 100, behavior: 'smooth'})
      },300);
      return this.userData;
    }else{
      setTimeout(() => {
        window.scrollTo({top:document.body.scrollHeight + 100, behavior: 'smooth'})
      },300);
      return this.userData = this.commonData.characterData;
    }
  }
  searchCharacter():void{
    this.errorShow = false;

    let charcode = (<string>this.characterUrl).match(/\d+/);
    let char = parseInt(charcode ? charcode[0] : 'undefed')
    this.characterID = char;
    this.showSpinner = true;
    this.characterUrl = "";

    forkJoin([
      this.getChar.getaAllCharacterInfo(this.characterID), 
      this.getChar.getMounts(),
       this.getChar.getMinions(), 
       this.getChar.getAchieves()]).subscribe(([s, mo, mi, ac])=>{
      this.userData = s;
      
      this.userData.userMounts = s.Mounts;
      this.userData.userMinions = s.Minions;
      this.userData.mountCount = (this.userData.userMounts ? this.userData.userMounts.length : 0);
      this.userData.minionCount = (this.userData.userMinions ? this.userData.userMinions.length : 0);
      this.userData.achieveCount = (s.Achievements.List ? s.Achievements.List.length : 0);
      this.userData.mountDet = mo;
      this.userData.minionDet = mi;
      this.userData.achievementDet = ac;

        this.userData.mountCompletion = Math.round(this.userData.mountCount/mo.count * 100);
        this.userData.achievementCompletion = Math.round(this.userData.achieveCount/ac.count * 100);
        this.userData.minionCompletion = Math.round(this.userData.minionCount/mi.count * 100);
      // this.userData.bardCompletion = Math.round(this.userData.mounts.count/this.userData.mounts.total * 100);
      // this.userData.achievementCompletion = Math.round(this.userData.achievements.count/this.userData.achievements.total * 100);
      // this.userData.minionCompletion = Math.round(this.userData.minions.count/this.userData.minions.total * 100);
      this.commonData.savedCharacterData(this.userData);

      this.characterObj.emit(this.commonData)
      console.log(this.userData);
      this.showSpinner = false;
      setTimeout(() => {
        window.scrollTo({top:document.body.scrollHeight + 100, behavior: 'smooth'})
      },300);

    },(error)=>{ 
      this.showSpinner = false;
      this.errorShow = true;
      console.log(error)})

  }
  

}
