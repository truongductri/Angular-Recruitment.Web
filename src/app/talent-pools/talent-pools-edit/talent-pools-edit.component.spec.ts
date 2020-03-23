import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPoolsEditComponent } from './talent-pools-edit.component';

describe('TalentPoolsEditComponent', () => {
  let component: TalentPoolsEditComponent;
  let fixture: ComponentFixture<TalentPoolsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentPoolsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentPoolsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
