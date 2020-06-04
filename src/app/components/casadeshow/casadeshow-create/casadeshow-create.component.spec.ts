import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowCreateComponent } from './casadeshow-create.component';

describe('CasadeshowCreateComponent', () => {
  let component: CasadeshowCreateComponent;
  let fixture: ComponentFixture<CasadeshowCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
