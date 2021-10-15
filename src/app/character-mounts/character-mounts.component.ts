import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';
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

  filterOptions: filterOp[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'collected', viewValue: 'Collected'},
    {value: 'uncollected', viewValue: 'Uncollected'}
  ];

  constructor(public comdata:CommonServiceService, private getMounts:GetCharacterServiceService) { }

  ngOnInit(): void {

    this.getMounts.getMounts().subscribe(res =>{
      this.userMountList = this.comdata.characterData.userMounts;

      if(this.userMountList != null){
        this.userMountList.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      }

      let resp: any[] = res.results;
      resp.sort((a, b) => (a.name > b.name ? 1 : -1));
      

      resp.forEach((o1) =>{
        console.log(o1.name);
        if(o1.name){
               //   this.mountNames.push(o1.name);
        }

        if(this.userMountList != null){

        this.userMountList.filter(o2 => {
          if(o1.name.toLowerCase() === o2.Name.toLowerCase()){
            o1.isOwned= true;
          }
        })
      }
      })

      this.finalMountList = resp;
    })
  }
 // Push a search term into the observable stream.


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
