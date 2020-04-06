import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { MarksComponent } from './marks/marks.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path: 'services', component: ServicesComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'services', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
