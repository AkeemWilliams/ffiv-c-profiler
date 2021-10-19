import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ffiv-profiler-project';
  showLink:boolean = false;
  
  constructor(private commonData:CommonServiceService, private router:Router) {

  }

ngOnInit(){
  this.router.navigate(['/home'])
}
  onValueChange(char: { characterObj: { subscribe: (arg0: (data: any) => void) => void; } | undefined; }){
    if(char.characterObj != undefined){
      char.characterObj.subscribe((data:any)=>{
        this.showLink = true;
      });
    }
  }
}

