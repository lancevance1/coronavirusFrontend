import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatsComponent } from './case-stats.component';

describe('CaseStatsComponent', () => {
  let component: CaseStatsComponent;
  let fixture: ComponentFixture<CaseStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
