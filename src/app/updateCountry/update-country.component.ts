import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/country';
import { ActivatedRoute, Router } from '@angular/router';
import { countryService } from 'src/app/country.service'
@Component({
  selector: 'app-update-country',
  template: "./update-country.component.html",
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  id: number;
  name: country;

  constructor(private route: ActivatedRoute,private router: Router,
    private countryService: countryService) { }

  ngOnInit() {
    this.name = new country();

    this.id = this.route.snapshot.params['id'];
    
    this.countryService.getCountry(this.id)
      .subscribe(data => {
        console.log(data)
        this.name = data;
      }, error => console.log(error));
  }

  updateCountry() {
    this.countryService.updateCountry(this.id, this.name)
      .subscribe(data => {
        console.log(data);
        this.name = new country();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCountry();    
  }

  gotoList() {
    this.router.navigate(['/springboot-crud-rest/rest/v2/countries']);
  }
}