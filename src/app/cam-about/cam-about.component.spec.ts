import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamAboutComponent } from './cam-about.component';

describe('CamAboutComponent', () => {
  let component: CamAboutComponent;
  let fixture: ComponentFixture<CamAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
