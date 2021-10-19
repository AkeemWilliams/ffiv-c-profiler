import { Component, OnInit, Inject } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogDT } from '../Interfaces/dialog-int'

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
  userMountList!: Array<any>;
  mountList!:Array<any>;
  finalMountList!: Array<any>;
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

  constructor(public comdata:CommonServiceService, public dialog:MatDialog, private getMounts:GetCharacterServiceService) { }

  ngOnInit(): void {
    this.showSpinner = true;

      this.errorShow = false;

      this.userMountList = this.comdata.characterData.userMounts;

      if(this.userMountList != null){
        this.userMountList.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      }

      let resp: any[] | undefined | null = this.comdata.characterData.mountDet.results;
      if(resp){
      resp.sort((a, b) => (a.name > b.name ? 1 : -1));
      resp.forEach((o1) =>{
 
        if(this.userMountList != null){

        this.userMountList.filter(o2 => {
          if(o1.name.toLowerCase() === o2.Name.toLowerCase()){
            o1.isOwned= true;
          }
        })
      }
      })
    }
      if(resp)
      this.finalMountList = resp;

            
      setTimeout(() => {
        this.showSpinner = false;
      });

  }

  itemClick(event: dialogDT){
    this.selectedDetail = event;
     if(event.sources)
     this.selectedDetail.sauce = event.sources[0]
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
