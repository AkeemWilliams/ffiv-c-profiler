import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {
 userData:any;

  constructor(private LocalStorageService:LocalStorageService) { }

  ngOnInit(): void {

if(!this.LocalStorageService.getItem('ff14data')){
  fetch("https://xivapi.com/character/37684988?data=AC,MIMO", { mode: 'cors' })
	.then(response => response.json())
	.then(data => {

    this.LocalStorageService.setItem('ff14data', JSON.stringify(data));
    this.userData = data;
    console.log(this)

  })
}else{
  this.userData = this.LocalStorageService.getItem('ff14data');
  this.userData = JSON.parse(this.userData);

  console.log(this)
}
  }

}
