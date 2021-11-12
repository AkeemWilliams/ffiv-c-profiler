import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterPanelComponent } from './character-panel.component';
import { FormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { UserProgressBarModule } from '../user-progress-bar/user-progress-bar.module';

import { StoreModule } from '@ngrx/store';
import { CharacterPanelEffects } from './character-panel.effects';
import { getCharError, getChars, getCharSuccess } from '../store/character-profiler.actions'

import { characterPanelReducer } from './character-panel.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [CharacterPanelComponent],
  imports: [
    FormsModule,
    SharedModulesModule,
    UserProgressBarModule,
    CommonModule,
    StoreModule.forFeature('cprofile', characterPanelReducer),
    EffectsModule.forFeature([CharacterPanelEffects])
  ],exports:[
    CharacterPanelComponent
  ]
})
export class CharacterPanelModule { }
