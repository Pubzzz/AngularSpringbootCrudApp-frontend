import { TestBed } from '@angular/core/testing';

import { countryService } from './country.service';

describe('EmployeeService', () => {
  let service: countryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(countryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
