import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { AllCharacterData } from '../Interfaces/char-progress'
import { Store } from '@ngrx/store';
import { getChars } from '../store/character-profiler.actions';
import * as cselect from '../store/character-profile.selector';
import { charPanelState } from '../store/character-panel.state';

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
  largeUserObj = {};

  @Output() characterObj = new EventEmitter();
  errorShow: boolean = false;
  testEffectData$!: AllCharacterData | null;

  constructor(private commonData:CommonServiceService, private store: Store<charPanelState>) {}

    //search
    characterUrl?:string | number;
    characterID?:number;

  ngOnInit(): void {
    this.store.select(cselect.giveCProfile).subscribe((v)=>{
      this.userData = v;
      this.characterObj.emit(this.userData);
     })

    this.store.select(cselect.isLoadingSelector).subscribe((res)=>{
      this.showSpinner = res;
    })

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
    this.characterUrl = "";
    let cid = {id : char, isLoading: true}

    this.store.dispatch(getChars(cid));
  }
}
