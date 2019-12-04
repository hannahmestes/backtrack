import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { whitelistPage } from './whitelist.page';

describe('whitelistPage', () => {
  let component: whitelistPage;
  let fixture: ComponentFixture<whitelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [whitelistPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(whitelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
