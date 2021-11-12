import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment'; // Angular CLI environment
//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharacterPanelEffects } from './character-panel/character-panel.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Components Classes */
import { AppComponent } from './app.component';
// import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { UserProgressBarComponent } from './user-progress-bar/user-progress-bar.component';
import { CharacterMountsComponent } from './character-mounts/character-mounts.component';
import { CharacterMinionsComponent } from './character-minions/character-minions.component';
import { CharacterMountsModule } from './character-mounts/character-mounts.module';
import { CharacterPanelModule } from './character-panel/character-panel.module'
// Pipes
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { SearchFilterModule } from './pipes/search-filter/search-filter.module';

// Material Design
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { characterPanelReducer } from './store/character-profiler.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMinionsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CharacterPanelModule,
    CharacterMountsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    SearchFilterModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot()
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
