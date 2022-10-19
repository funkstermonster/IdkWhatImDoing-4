import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components import
import { RegisterFormComponent } from './components/navbar/register-form/register-form.component';
import { LoginFormComponent } from './components/navbar/login-form/login-form.component';



//NG Prime components import
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService, MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { TableComponent } from './components/main-container/table/table.component';
import { TableItemDetailsComponent } from './components/main-container/table/table-item-details/table-item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    MainContainerComponent,
    TableComponent,
    TableItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



    //NG Prime components
    ConfirmPopupModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,


  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
