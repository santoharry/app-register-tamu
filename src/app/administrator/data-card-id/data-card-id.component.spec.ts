import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardIDComponent } from './data-card-id.component';

describe('DataCardIDComponent', () => {
  let component: DataCardIDComponent;
  let fixture: ComponentFixture<DataCardIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
