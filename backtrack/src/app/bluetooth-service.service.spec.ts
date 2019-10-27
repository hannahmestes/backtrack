import { TestBed } from '@angular/core/testing';

import { BluetoothServiceService } from './bluetooth-service.service';

describe('BluetoothServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluetoothServiceService = TestBed.get(BluetoothServiceService);
    expect(service).toBeTruthy();
  });
});
