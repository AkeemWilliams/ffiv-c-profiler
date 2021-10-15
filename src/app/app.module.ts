import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


/* Components Classes */
import { AppComponent } from './app.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { UserProgressBarComponent } from './user-progress-bar/user-progress-bar.component';
import { CharacterMountsComponent } from './character-mounts/character-mounts.component';
import { CharacterMinionsComponent } from './character-minions/character-minions.component';

// Pipes
import { SearchFilterPipe } from './search-filter.pipe';

// Material Design
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    CharacterPanelComponent,
    UserProgressBarComponent,
    CharacterMountsComponent,
    CharacterMinionsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
