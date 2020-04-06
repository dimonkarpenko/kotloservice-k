import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { MarksComponent } from './marks/marks.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path: 'services', component: ServicesComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
