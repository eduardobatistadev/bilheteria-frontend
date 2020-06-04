import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowUpdateComponent } from './casadeshow-update.component';

describe('CasadeshowUpdateComponent', () => {
  let component: CasadeshowUpdateComponent;
  let fixture: ComponentFixture<CasadeshowUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
