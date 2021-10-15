import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
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

  userMinionsList!: Array<any>;
  minionList!:Array<any>;
  finalMinionList!: Array<any>;
  selectedval: string = 'all';


  filterOptions: filterOp[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'collected', viewValue: 'Collected'},
    {value: 'uncollected', viewValue: 'Uncollected'}
  ];

  constructor(public comdata:CommonServiceService, private getMinions:GetCharacterServiceService) { }

  ngOnInit(): void {
    this.getMinions.getMinions().subscribe(res =>{
      this.userMinionsList = this.comdata.characterData.userMinions;
      if(this.userMinionsList != null){
        this.userMinionsList.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      }
      let resp: any[] = res.results;
      resp.sort((a, b) => (a.name > b.name ? 1 : -1));
      if(this.userMinionsList != null){

      resp.forEach(o1 =>{

        this.userMinionsList.filter(o2 => {
          if(o1.name.toLowerCase() === o2.Name.toLowerCase()){
            o1.isOwned= true;
          }
        })
      
      })
    }
      this.finalMinionList = resp;
      console.log(this);
    })
  }

  toggleShow(val:string){
    const minions = document.querySelectorAll(".minion-box");
    const collectedminions = document.querySelectorAll(".minion-box.owned");
    switch(val){

      case "all":
        minions.forEach((minion)=>{
          (minion as HTMLElement).classList.remove("hidden");
        });
        break;
      case "collected":

        minions.forEach((minion)=>{
          (minion as HTMLElement).classList.add("hidden");
        });
        collectedminions.forEach((cminion)=>{
          (cminion as HTMLElement).classList.remove("hidden");
        });

        break;
      case "uncollected":
        minions.forEach((minion)=>{
          (minion as HTMLElement).classList.remove("hidden");
        });
        collectedminions.forEach((cminion)=>{
          (cminion as HTMLElement).classList.add("hidden");
        });


        break;
  }
  }

}
