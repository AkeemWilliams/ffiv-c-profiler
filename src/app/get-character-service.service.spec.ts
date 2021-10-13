import { TestBed } from '@angular/core/testing';

import { GetCharacterServiceService } from './get-character-service.service';

describe('GetCharacterServiceService', () => {
  let service: GetCharacterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCharacterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
