import { TestBed } from '@angular/core/testing';

import { StaticFileSpyro2Service } from './static-file-spyro2.service';

describe('StaticFileSpyro2Service', () => {
  let service: StaticFileSpyro2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticFileSpyro2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
