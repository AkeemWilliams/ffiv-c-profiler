import { Component, OnInit, Inject } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogDT } from '../Interfaces/dialog-int'
import { Store } from '@ngrx/store';
import { charPanelState } from '../store/character-panel.state';
import * as cselect from '../store/character-profile.selector';
import { AllCharacterData } from '../Interfaces/char-progress';

interface filterOp {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-character-minions',
  templateUrl: './character-minions.component.html',
  styleUrls: ['./character-minions.component.scss']
})

export class CharacterMinionsComponent implements OnInit {
  minionList!: Array < any > ;
  minionDetails:any;
  finalMinionList!: Array < any > ;
  selectedval: string = 'all';
  minNames: string = "";
  showSpinner: boolean = false;
  errorShow: boolean = false;
  errMsg: string = "Unable to get minion data. Please try again later.";

  selectedDetail: dialogDT = {
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

  filterOptions: filterOp[] = [{
      value: 'all',
      viewValue: 'All'
    },
    {
      value: 'collected',
      viewValue: 'Collected'
    },
    {
      value: 'uncollected',
      viewValue: 'Uncollected'
    }
  ];

  cdata!:AllCharacterData | null;
  userMinionsList: { Icon: string; Name: string; }[] | undefined;

  constructor(public comdata: CommonServiceService, public dialog: MatDialog, private store:Store<charPanelState>) {}

  ngOnInit(): void {
    this.store.select(cselect.giveCProfile).subscribe(async (v)=>{
      this.cdata = v;
        this.userMinionsList = v?.Minions;
        this.minionDetails = v?.minionDet.results;
        })
  }

  itemClick(event: dialogDT) {
    (event);
    this.selectedDetail = event;
    this.dialog.open(DialogContent, {
      data: this.selectedDetail

    });
  }

  toggleShow(val: string) {
    const minions = document.querySelectorAll(".minion-box");
    const collectedminions = document.querySelectorAll(".minion-box.owned");
    switch (val) {

      case "all":
        minions.forEach((minion) => {
          (minion as HTMLElement).classList.remove("hidden");
        });
        break;
      case "collected":

        minions.forEach((minion) => {
          (minion as HTMLElement).classList.add("hidden");
        });
        collectedminions.forEach((cminion) => {
          (cminion as HTMLElement).classList.remove("hidden");
        });

        break;
      case "uncollected":
        minions.forEach((minion) => {
          (minion as HTMLElement).classList.remove("hidden");
        });
        collectedminions.forEach((cminion) => {
          (cminion as HTMLElement).classList.add("hidden");
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
