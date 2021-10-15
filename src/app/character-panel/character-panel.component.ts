import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import { CommonServiceService } from '../common-service.service';
import { BehaviorSubject,forkJoin, observable, Observable } from 'rxjs';


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
  // RxJS v6+
   suber = new BehaviorSubject(0);

  ngOnInit(): void {
    if(this.userData){
      return this.userData;
    }else{
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

    forkJoin([this.getChar.getCharacter(this.characterID),this.getChar.getaAllCharacterInfo(this.characterID)]).subscribe(([s,ps])=>{
      this.userData = s;
      this.userData.userMounts = ps.Mounts;
      this.userData.userMinions = ps.Minions;


      this.userData.mountCompletion = Math.round(this.userData.mounts.count/this.userData.mounts.total * 100);
      this.userData.achievementCompletion = Math.round(this.userData.achievements.count/this.userData.achievements.total * 100);
      this.userData.minionCompletion = Math.round(this.userData.minions.count/this.userData.minions.total * 100);
      this.commonData.savedCharacterData(this.userData);

      this.characterObj.emit(this.commonData)
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
