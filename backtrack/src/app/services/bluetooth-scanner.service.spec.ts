import { TestBed } from '@angular/core/testing';

import { BluetoothScannerService } from './bluetooth-scanner.service';

describe('BluetoothScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluetoothScannerService = TestBed.get(BluetoothScannerService);
    expect(service).toBeTruthy();
  });
});
