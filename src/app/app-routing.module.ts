
import { CreateCountryComponent } from 'src/app/createCountry/create-country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { countryListComponent } from 'src/app/countryList/country-list.component';
import { UpdateCountryComponent } from 'src/app/updateCountry/update-country.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'countries', component: countryListComponent },
  { path: 'add', component: CreateCountryComponent },
  { path: 'update/:id', component: UpdateCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




