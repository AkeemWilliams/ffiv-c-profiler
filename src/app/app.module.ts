import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components Classes */
import { AppComponent } from './app.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { UserProgressBarComponent } from './user-progress-bar/user-progress-bar.component';
import { CharacterMountsComponent } from './character-mounts/character-mounts.component';
import { CharacterMinionsComponent } from './character-minions/character-minions.component';

// Material Design
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    CharacterPanelComponent,
    UserProgressBarComponent,
    CharacterMountsComponent,
    CharacterMinionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
