import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabledataComponent } from './tabledata/tabledata.component';


const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: TabledataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
