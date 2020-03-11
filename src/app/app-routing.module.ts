import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaseStatsComponent} from './case-stats/case-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/cases', pathMatch: 'full' },
  { path: 'cases', component: CaseStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
