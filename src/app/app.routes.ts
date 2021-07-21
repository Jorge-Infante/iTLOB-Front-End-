import {Routes} from '@angular/router'
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchComponent } from './components/search/search.component';



export const ROUTES: Routes = [
    {path:'employee', component:EmployeeComponent},
    {path:'search', component:SearchComponent},
    {path:'**', pathMatch:'full', redirectTo:'employee'},


];