import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalledComponent } from './new-called.component';

describe('NewCalledComponent', () => {
  let component: NewCalledComponent;
  let fixture: ComponentFixture<NewCalledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCalledComponent]
    });
    fixture = TestBed.createComponent(NewCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
