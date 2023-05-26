import { TestBed } from '@angular/core/testing';

import { AppRoutingModuleService } from './app-routing.module.service';

describe('AppRoutingModuleService', () => {
  let service: AppRoutingModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRoutingModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
