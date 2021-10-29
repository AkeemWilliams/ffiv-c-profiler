import { Component, OnInit, Inject } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogDT } from '../Interfaces/dialog-int'
import { Store } from '@ngrx/store';
import { charPanelState } from '../store/character-panel.state';
import * as cselect from '../store/character-profile.selector';
import { AllCharacterData } from '../Interfaces/char-progress';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
interface filterOp {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-character-mounts',
  templateUrl: './character-mounts.component.html',
  styleUrls: ['./character-mounts.component.scss']
})

export class CharacterMountsComponent implements OnInit {
  mountList!:Array<any>;
  mountDetails: any ;
  selectedval: string = 'all';
  mountNames: string = "";
  showSpinner: boolean = false;
  errorShow:boolean = false;
  errMsg:string = "Unable to get mount data. Please try again later.";

  selectedDetail:dialogDT = {
    description: '',
    enhanced_description: '',
    icon: '',
    id: 0,
    image: '',
    item_id: null,
    movement: '',
    name: '',
    order: 0,
    order_group: 0,
    owned: '',
    patch: '',
    seats: 0,
    sources: null,
    tooltip: '',
    isOwned: false,
    sauce: undefined
  };
  
  filterOptions: filterOp[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'collected', viewValue: 'Collected'},
    {value: 'uncollected', viewValue: 'Uncollected'}
  ];
  cdata!:AllCharacterData | null;
  userMountList: { Icon: string; Name: string; }[] | undefined;



  constructor(public comdata:CommonServiceService, private store:Store<charPanelState>, public dialog:MatDialog, private getMounts:GetCharacterServiceService) { }

  ngOnInit(): void {
    this.store.select(cselect.giveCProfile).subscribe(async (v)=>{
      this.cdata = v;
        this.userMountList = v?.Mounts;
        this.mountDetails = v?.mountDet.results;
        })

  }

  itemClick(event: dialogDT){
    this.selectedDetail = event;
    this.dialog.open(DialogContent, {
      data: this.selectedDetail

    });
  }

  toggleShow(val:string){
    const mounts = document.querySelectorAll(".mount-box");
    const collectedMounts = document.querySelectorAll(".mount-box.owned");
    switch(val){

      case "all":
        mounts.forEach((mount)=>{
          (mount as HTMLElement).classList.remove("hidden");
        });
        break;
      case "collected":

        mounts.forEach((mount)=>{
          (mount as HTMLElement).classList.add("hidden");
        });
        collectedMounts.forEach((cmount)=>{
          (cmount as HTMLElement).classList.remove("hidden");
        });

        break;
      case "uncollected":
        mounts.forEach((mount)=>{
          (mount as HTMLElement).classList.remove("hidden");
        });
        collectedMounts.forEach((cmount)=>{
          (cmount as HTMLElement).classList.add("hidden");
        });
        break;
  }
  }
}
@Component({
  selector: 'dialog-tmpt',
  templateUrl: '../dialog-tmpt.html'
})

export class DialogContent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: dialogDT) {}

}
