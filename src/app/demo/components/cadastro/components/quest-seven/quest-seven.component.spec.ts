import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSevenComponent } from './quest-seven.component';

describe('QuestSevenComponent', () => {
  let component: QuestSevenComponent;
  let fixture: ComponentFixture<QuestSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestSevenComponent]
    });
    fixture = TestBed.createComponent(QuestSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
