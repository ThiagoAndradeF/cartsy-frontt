import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestOneComponent } from './quest-one.component';

describe('QuestOneComponent', () => {
  let component: QuestOneComponent;
  let fixture: ComponentFixture<QuestOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestOneComponent]
    });
    fixture = TestBed.createComponent(QuestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
