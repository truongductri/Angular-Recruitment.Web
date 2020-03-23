import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPoolsAddComponent } from './talent-pools-add.component';

describe('TalentPoolsAddComponent', () => {
  let component: TalentPoolsAddComponent;
  let fixture: ComponentFixture<TalentPoolsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentPoolsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentPoolsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
