import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

//http
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Routes
import {ROUTES} from './app.routes'

//Services 
import { EmployeeService } from './services/employee.service';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
