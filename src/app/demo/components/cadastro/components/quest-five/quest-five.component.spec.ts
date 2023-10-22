import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestFiveComponent } from './quest-five.component';

describe('QuestFiveComponent', () => {
  let component: QuestFiveComponent;
  let fixture: ComponentFixture<QuestFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestFiveComponent]
    });
    fixture = TestBed.createComponent(QuestFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
