import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayyyComponent } from './arrayyy.component';

describe('ArrayyyComponent', () => {
  let component: ArrayyyComponent;
  let fixture: ComponentFixture<ArrayyyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayyyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
