import { TestBed, inject } from '@angular/core/testing';

import { ScoreService } from './ScoreService';

describe('ScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreService]
    });
  });

  it('should be created', inject([ScoreService], (service: ScoreService) => {
    expect(service).toBeTruthy();
  }));
});
