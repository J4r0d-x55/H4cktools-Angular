import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiktoComponent } from './nikto.component';

describe('NiktoComponent', () => {
  let component: NiktoComponent;
  let fixture: ComponentFixture<NiktoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiktoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiktoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
