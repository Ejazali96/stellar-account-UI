import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntivirusComponent } from './antivirus.component';

describe('AntivirusComponent', () => {
  let component: AntivirusComponent;
  let fixture: ComponentFixture<AntivirusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntivirusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntivirusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
