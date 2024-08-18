import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrBubbleChartComponent } from './mrr-bubble-chart.component';

describe('MrrBubbleChartComponent', () => {
  let component: MrrBubbleChartComponent;
  let fixture: ComponentFixture<MrrBubbleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MrrBubbleChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
