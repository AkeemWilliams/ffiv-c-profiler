import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterMountsComponent } from './character-mounts.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchFilterModule } from '../pipes/search-filter/search-filter.module';


@NgModule({
  declarations: [CharacterMountsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    SearchFilterModule,
    MatProgressSpinnerModule,

  ],exports:[
    CharacterMountsComponent
  ]
})
export class CharacterMountsModule { }
