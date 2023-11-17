import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonNewComponent } from './components/person-new/person-new.component';

const routes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-new', component: PersonNewComponent },
  { path: 'person-new/:id', component: PersonNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
