import { Component, OnInit, Inject } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogDT } from '../Interfaces/dialog-int'
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

  userMinionsList!: Array < any > ;
  minionList!: Array < any > ;
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

  constructor(public comdata: CommonServiceService, public dialog: MatDialog, private getMinions: GetCharacterServiceService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.getMinions.getMinions().subscribe(res => {
      this.errorShow = false;

      this.userMinionsList = this.comdata.characterData.userMinions;
      if (this.userMinionsList != null) {
        this.userMinionsList.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      }
      let resp: any[] | undefined | null = res.results;
      if (resp) {
        resp.sort((a, b) => (a.name > b.name ? 1 : -1));
        if (this.userMinionsList != null) {

          resp.forEach(o1 => {

            this.userMinionsList.filter(o2 => {
              if (o1.name.toLowerCase() === o2.Name.toLowerCase()) {
                o1.isOwned = true;
              }
            })

          })
        }
      }
      if (resp)
        this.finalMinionList = resp;

      setTimeout(() => {
        this.showSpinner = false;

      });
    }, (error) => {
      console.log(error);
      this.errorShow = true;
      this.showSpinner = false;

      return
    })
  }

  itemClick(event: dialogDT) {
    (event);
    this.selectedDetail = event;
    if (event.sources)
      this.selectedDetail.sauce = event.sources[0]
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
