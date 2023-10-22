import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestThreeComponent } from './quest-three.component';

describe('QuestThreeComponent', () => {
  let component: QuestThreeComponent;
  let fixture: ComponentFixture<QuestThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestThreeComponent]
    });
    fixture = TestBed.createComponent(QuestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
