import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusharedpageComponent } from './menusharedpage.component';

describe('MenusharedpageComponent', () => {
  let component: MenusharedpageComponent;
  let fixture: ComponentFixture<MenusharedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusharedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusharedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
