import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamCamTandilComponent } from './cam-cam-tandil.component';

describe('CamCamTandilComponent', () => {
  let component: CamCamTandilComponent;
  let fixture: ComponentFixture<CamCamTandilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamCamTandilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamCamTandilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
