import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTamuComponent } from './data-tamu.component';

describe('DataTamuComponent', () => {
  let component: DataTamuComponent;
  let fixture: ComponentFixture<DataTamuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTamuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
