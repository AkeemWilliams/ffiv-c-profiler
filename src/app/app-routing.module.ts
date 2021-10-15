import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterMountsComponent } from './character-mounts/character-mounts.component';
import { CharacterMinionsComponent } from './character-minions/character-minions.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';

const routes: Routes = [
 
  {path:'home', component:CharacterPanelComponent},
  {path:'mounts', component:CharacterMountsComponent},
  {path:'minions', component:CharacterMinionsComponent},
  { path: '', redirectTo: '/home',  pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
