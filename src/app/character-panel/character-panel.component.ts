import {Component,OnInit} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {
  userData: any;

  //completions
  achievementCompletion?: number;
  mountCompletion?: number;
  minionCompletion?: number;

  constructor(private LocalStorageService: LocalStorageService) {}

  ngOnInit(): void {

    if (!this.LocalStorageService.getItem('ff14data')) {

      fetch("https://ffxivcollect.com/api/characters/37684988", {
          mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {

          this.userData = data;
          this.mountCompletion = Math.round(this.userData.mounts.count/this.userData.mounts.total * 100);
          this.achievementCompletion = Math.round(this.userData.achievements.count/this.userData.achievements.total * 100);
          this.minionCompletion = Math.round(this.userData.minions.count/this.userData.minions.total * 100);

          console.log(this, this.mountCompletion)
          //get maindata
          fetch("https://xivapi.com/character/37684988?data=AC,MIMO", {
              mode: 'cors'
            })
            .then(response => response.json())
            .then(data => {

              this.userData.details = data;
              this.LocalStorageService.setItem('ff14data', JSON.stringify(this.userData));

              console.log(this)

            })
        })


    } else {
      this.userData = this.LocalStorageService.getItem('ff14data');
      this.userData = JSON.parse(this.userData);

      console.log(this)
    }
  }

  

}
