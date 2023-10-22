import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSixComponent } from './quest-six.component';

describe('QuestSixComponent', () => {
  let component: QuestSixComponent;
  let fixture: ComponentFixture<QuestSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestSixComponent]
    });
    fixture = TestBed.createComponent(QuestSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
