import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchFilterModule } from '../pipes/search-filter/search-filter.module';
import { UserProgressBarComponent } from '../user-progress-bar/user-progress-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SearchFilterModule,
  ]
})
export class SharedModulesModule { }
