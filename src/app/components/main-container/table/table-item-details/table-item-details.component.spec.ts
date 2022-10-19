import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemDetailsComponent } from './table-item-details.component';

describe('TableItemDetailsComponent', () => {
  let component: TableItemDetailsComponent;
  let fixture: ComponentFixture<TableItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
