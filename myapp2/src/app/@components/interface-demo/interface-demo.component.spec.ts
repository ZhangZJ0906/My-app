import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDemoComponent } from './interface-demo.component';

describe('InterfaceDemoComponent', () => {
  let component: InterfaceDemoComponent;
  let fixture: ComponentFixture<InterfaceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
