import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTwoComponent } from './quest-two.component';

describe('QuestTwoComponent', () => {
  let component: QuestTwoComponent;
  let fixture: ComponentFixture<QuestTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestTwoComponent]
    });
    fixture = TestBed.createComponent(QuestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
