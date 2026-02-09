import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSortDemoComponent } from './data-sort-demo.component';

describe('DataSortDemoComponent', () => {
  let component: DataSortDemoComponent;
  let fixture: ComponentFixture<DataSortDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSortDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSortDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
