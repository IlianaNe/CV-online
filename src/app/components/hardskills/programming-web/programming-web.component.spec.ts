import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingWebComponent } from './programming-web.component';

describe('ProgrammingWebComponent', () => {
  let component: ProgrammingWebComponent;
  let fixture: ComponentFixture<ProgrammingWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
