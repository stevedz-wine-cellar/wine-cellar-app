import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TastingNotePage } from './tasting-note.page';

describe('TastingNotePage', () => {
  let component: TastingNotePage;
  let fixture: ComponentFixture<TastingNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TastingNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
