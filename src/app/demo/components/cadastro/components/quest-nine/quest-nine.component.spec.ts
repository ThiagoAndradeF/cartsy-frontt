import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestNineComponent } from './quest-nine.component';

describe('QuestNineComponent', () => {
  let component: QuestNineComponent;
  let fixture: ComponentFixture<QuestNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestNineComponent]
    });
    fixture = TestBed.createComponent(QuestNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
