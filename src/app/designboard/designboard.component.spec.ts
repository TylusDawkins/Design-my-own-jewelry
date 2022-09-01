import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignboardComponent } from './designboard.component';

describe('DesignboardComponent', () => {
  let component: DesignboardComponent;
  let fixture: ComponentFixture<DesignboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
