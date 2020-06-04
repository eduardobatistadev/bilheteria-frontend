import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadeshowCrudComponent } from './casadeshow-crud.component';

describe('CasadeshowCrudComponent', () => {
  let component: CasadeshowCrudComponent;
  let fixture: ComponentFixture<CasadeshowCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadeshowCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadeshowCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
