import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowDeleteComponent } from './casadeshow-delete.component';

describe('CasadeshowDeleteComponent', () => {
  let component: CasadeshowDeleteComponent;
  let fixture: ComponentFixture<CasadeshowDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
