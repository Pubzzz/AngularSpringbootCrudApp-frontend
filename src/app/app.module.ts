import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCountryComponent } from 'src/app/createCountry/create-country.component';
import { countryListComponent } from 'src/app/countryList/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCountryComponent } from 'src/app/updateCountry/update-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCountryComponent,
    countryListComponent,
    UpdateCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }