import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdemoComponent } from './chartdemo.component';

describe('ChartdemoComponent', () => {
  let component: ChartdemoComponent;
  let fixture: ComponentFixture<ChartdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
