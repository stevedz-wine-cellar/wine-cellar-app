import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TastingPage } from './tasting.page';

describe('TastingPage', () => {
  let component: TastingPage;
  let fixture: ComponentFixture<TastingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TastingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
