import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ffiv-profiler-project';
  //search
  characterUrl?:string | number ;



  searchCharacter():void{
    let charcode = (<string>this.characterUrl).match(/\d+/);
    console.log(`the character url is: ${this.characterUrl}`, charcode, charcode ? charcode[0] : 'undefed');
    this.characterUrl = "";
  }

}

