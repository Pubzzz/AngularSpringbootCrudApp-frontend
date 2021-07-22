import { countryService } from 'src/app/country.service';
import { country } from 'src/app/country';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country',
  templateUrl: "./create-country.component.html",
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  country: country = new country();
  submitted = false;

  constructor(private countryService: countryService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.country = new country();
  }

  save() {
    this.countryService
    .createCountry(this.country).subscribe(data => {
      console.log(data)
      this.country = new country();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/countries']);
  }
}