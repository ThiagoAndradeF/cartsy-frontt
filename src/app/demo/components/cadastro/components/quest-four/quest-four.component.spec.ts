import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestFourComponent } from './quest-four.component';

describe('QuestFourComponent', () => {
  let component: QuestFourComponent;
  let fixture: ComponentFixture<QuestFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestFourComponent]
    });
    fixture = TestBed.createComponent(QuestFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
