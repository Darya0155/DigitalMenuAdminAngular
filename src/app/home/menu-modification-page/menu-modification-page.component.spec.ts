import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModificationPageComponent } from './menu-modification-page.component';

describe('MenuModificationPageComponent', () => {
  let component: MenuModificationPageComponent;
  let fixture: ComponentFixture<MenuModificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuModificationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuModificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
