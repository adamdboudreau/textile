/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TextileListService } from './textile-list.service';

describe('Service: TextileList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextileListService]
    });
  });

  it('should ...', inject([TextileListService], (service: TextileListService) => {
    expect(service).toBeTruthy();
  }));
});
