import { TestBed } from '@angular/core/testing';

import { CarritoCamService } from './carrito-cam.service';

describe('CarritoCamService', () => {
  let service: CarritoCamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoCamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
