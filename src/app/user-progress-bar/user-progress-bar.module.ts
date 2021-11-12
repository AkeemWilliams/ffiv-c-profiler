import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProgressBarComponent } from './user-progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [UserProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],exports:[
    UserProgressBarComponent
  ]
})
export class UserProgressBarModule { }
