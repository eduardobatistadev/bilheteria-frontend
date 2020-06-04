import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowReadComponent } from './casadeshow-read.component';

describe('CasadeshowReadComponent', () => {
  let component: CasadeshowReadComponent;
  let fixture: ComponentFixture<CasadeshowReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
