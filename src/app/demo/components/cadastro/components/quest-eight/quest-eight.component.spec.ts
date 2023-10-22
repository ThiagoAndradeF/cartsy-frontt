import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestEightComponent } from './quest-eight.component';

describe('QuestEightComponent', () => {
  let component: QuestEightComponent;
  let fixture: ComponentFixture<QuestEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestEightComponent]
    });
    fixture = TestBed.createComponent(QuestEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
