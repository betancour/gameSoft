import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnewComponent } from './teamnew.component';

describe('TeamnewComponent', () => {
  let component: TeamnewComponent;
  let fixture: ComponentFixture<TeamnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
