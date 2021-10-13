import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { GetCharacterServiceService } from '../get-character-service.service';

@Component({
  selector: 'app-character-mounts',
  templateUrl: './character-mounts.component.html',
  styleUrls: ['./character-mounts.component.scss']
})
export class CharacterMountsComponent implements OnInit {

  constructor(public comdata:CommonServiceService, private getMounts:GetCharacterServiceService) { }

  ngOnInit(): void {
    this.getMounts.getMounts().subscribe(res =>{
      console.log(this);
    })
  }

}
