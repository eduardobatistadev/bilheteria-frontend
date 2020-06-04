import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowComponent } from './casadeshow.component';

describe('CasadeshowComponent', () => {
  let component: CasadeshowComponent;
  let fixture: ComponentFixture<CasadeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
