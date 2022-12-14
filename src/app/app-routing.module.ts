import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableItemDetailsComponent } from './components/main-container/table/table-item-details/table-item-details.component';
import { TableComponent } from './components/main-container/table/table.component';
import { LoginFormComponent } from './components/navbar/login-form/login-form.component';
import { RegisterFormComponent } from './components/navbar/register-form/register-form.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  {
    path: '',
    component: TableComponent,
    children: [{ path: 'details', component: TableItemDetailsComponent }],
  },

  { path: 'login', component: LoginFormComponent },

  { path: 'register', component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
