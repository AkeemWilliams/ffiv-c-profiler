import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { charPanelState } from './store/character-panel.state';
import * as cselect from './store/character-profile.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ffiv-profiler-project';
  showLink:boolean = false;
  
  constructor(private commonData:CommonServiceService, private store:Store<charPanelState>, private router:Router) {

  }

ngOnInit(){
  this.router.navigate(['/home']);
  //new way of checking
  this.store.select(cselect.giveCProfile).subscribe(v => v ? this.showLink = true : this.showLink = false);
}
}

