import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnaissanceComponent } from './reconnaissance.component';

describe('HomeComponent', () => {
  let component: ReconnaissanceComponent;
  let fixture: ComponentFixture<ReconnaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReconnaissanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReconnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
