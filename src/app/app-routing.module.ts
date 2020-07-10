import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactionsComponent } from './factions/factions.component';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: "",component:HomeComponent},
  { path: "factions/:id", component:ShowComponent},
  { path: "factions",component:FactionsComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
