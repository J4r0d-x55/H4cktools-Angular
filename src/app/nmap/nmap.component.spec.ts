import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapComponent } from './nmap.component';

describe('NmapComponent', () => {
  let component: NmapComponent;
  let fixture: ComponentFixture<NmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
