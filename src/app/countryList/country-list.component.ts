

import { countryService } from "src/app/country.service";
import { country } from "src/app/country";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ['./country-list.component.css']
})
export class countryListComponent implements OnInit {
  
  countries: country[];

  constructor(private countryService: countryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

//Using subscribe method 
  reloadData() {
     this.countryService.getCountriesList().subscribe((res)=> {
      this.countries = res;
     });
  }

  deleteCountry(id: number) {
    this.countryService.deleteCountry(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateCountry(id: number){
    this.router.navigate(['update', id]);
  }
}